import * as React from 'react'
import { render } from '@react-email/components'
import { supabaseAdmin } from '@/integrations/supabase/client.server'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SITE_NAME = 'ScaleLabs Studio'
const SENDER_DOMAIN = 'notify.scalelabsstudio.com'
const FROM_DOMAIN = 'scalelabsstudio.com'

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')
}

interface EnqueueParams {
  templateName: string
  recipientEmail?: string
  templateData?: Record<string, any>
  idempotencyKey?: string
}

/**
 * Server-only helper to enqueue a transactional email. Bypasses auth — only
 * call from trusted server code (e.g., a server function that has already
 * validated input).
 */
export async function enqueueTransactionalEmail(params: EnqueueParams) {
  const template = TEMPLATES[params.templateName]
  if (!template) {
    console.error('Template not found', { templateName: params.templateName })
    return { ok: false as const, error: 'Template not found' }
  }

  const recipient = (template.to || params.recipientEmail || '').toLowerCase().trim()
  if (!recipient) {
    return { ok: false as const, error: 'No recipient' }
  }

  const supabase = supabaseAdmin
  const messageId = crypto.randomUUID()
  const idempotencyKey = params.idempotencyKey || messageId
  const templateData = params.templateData || {}

  // Suppression check
  const { data: suppressed } = await supabase
    .from('suppressed_emails')
    .select('email')
    .eq('email', recipient)
    .maybeSingle()
  if (suppressed) {
    return { ok: false as const, error: 'Email suppressed' }
  }

  // Ensure unsubscribe token
  let unsubscribeToken: string | null = null
  const { data: existing } = await supabase
    .from('email_unsubscribe_tokens')
    .select('token, used_at')
    .eq('email', recipient)
    .maybeSingle()
  if (existing && !existing.used_at) {
    unsubscribeToken = existing.token
  } else if (!existing) {
    unsubscribeToken = generateToken()
    await supabase
      .from('email_unsubscribe_tokens')
      .upsert({ email: recipient, token: unsubscribeToken }, { onConflict: 'email' })
  }

  const element = React.createElement(template.component, templateData)
  const html = await render(element)
  const text = await render(element, { plainText: true })
  const subject =
    typeof template.subject === 'function' ? template.subject(templateData) : template.subject

  await supabase.from('email_send_log').insert({
    message_id: messageId,
    template_name: params.templateName,
    recipient_email: recipient,
    status: 'pending',
  })

  const { error: enqueueError } = await supabase.rpc('enqueue_email', {
    queue_name: 'transactional_emails',
    payload: {
      message_id: messageId,
      to: recipient,
      from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
      sender_domain: SENDER_DOMAIN,
      subject,
      html,
      text,
      purpose: 'transactional',
      label: params.templateName,
      idempotency_key: idempotencyKey,
      unsubscribe_token: unsubscribeToken,
      queued_at: new Date().toISOString(),
    },
  })

  if (enqueueError) {
    console.error('enqueue_email failed', enqueueError)
    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: params.templateName,
      recipient_email: recipient,
      status: 'failed',
      error_message: enqueueError.message,
    })
    return { ok: false as const, error: enqueueError.message }
  }

  return { ok: true as const }
}