import * as React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  business?: string
  message?: string
  preferDate?: string
  wantsAppointment?: boolean
}

const ContactNotificationEmail = ({ name, email, business, message, preferDate, wantsAppointment }: Props) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>Neue Anfrage von {name || 'jemandem'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Neue Anfrage über die Website</Heading>
        <Section style={box}>
          <Text style={row}><strong>Name:</strong> {name || '—'}</Text>
          <Text style={row}><strong>E-Mail:</strong> {email || '—'}</Text>
          {business ? <Text style={row}><strong>Unternehmen:</strong> {business}</Text> : null}
          <Text style={row}><strong>Termin gewünscht:</strong> {wantsAppointment ? 'Ja' : 'Nein'}</Text>
          {preferDate ? <Text style={row}><strong>Wunsch-Zeitraum:</strong> {preferDate}</Text> : null}
        </Section>
        <Hr style={hr} />
        <Text style={label}>Nachricht</Text>
        <Text style={messageStyle}>{message || '—'}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) => `Neue Anfrage – ${data.name || 'Unbekannt'}`,
  displayName: 'Interne Anfrage-Benachrichtigung',
  to: 'david.tunjic@scalelabsstudio.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    business: 'ACME GmbH',
    message: 'Wir bräuchten Hilfe bei einer neuen Website.',
    preferDate: 'nächste Woche vormittags',
    wantsAppointment: true,
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '600px' }
const h1 = { fontSize: '20px', fontWeight: 'bold', color: '#0a1628', margin: '0 0 20px' }
const box = { backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px 18px' }
const row = { fontSize: '14px', color: '#1e293b', margin: '4px 0', lineHeight: '1.5' }
const hr = { borderColor: '#e2e8f0', margin: '24px 0' }
const label = { fontSize: '12px', textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#64748b', margin: '0 0 8px' }
const messageStyle = { fontSize: '14px', color: '#1e293b', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const, margin: 0 }