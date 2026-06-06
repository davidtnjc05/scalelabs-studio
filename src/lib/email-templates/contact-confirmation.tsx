import * as React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

const SITE_NAME = 'ScaleLabs Studio'

interface Props {
  name?: string
}

const ContactConfirmationEmail = ({ name }: Props) => (
  <Html lang="de" dir="ltr">
    <Head />
    <Preview>Danke für deine Anfrage bei {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>{name ? `Danke, ${name}!` : 'Danke für deine Anfrage!'}</Heading>
        <Text style={text}>
          Wir haben deine Nachricht erhalten und melden uns innerhalb von 24 Stunden persönlich bei dir.
        </Text>
        <Text style={text}>
          In der Zwischenzeit: falls du noch etwas ergänzen möchtest, antworte einfach auf diese E-Mail.
        </Text>
        <Text style={footer}>Beste Grüße,<br />David · {SITE_NAME}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'Wir haben deine Anfrage erhalten',
  displayName: 'Kontakt-Bestätigung',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '560px' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#0a1628', margin: '0 0 18px' }
const text = { fontSize: '14px', color: '#475569', lineHeight: '1.6', margin: '0 0 16px' }
const footer = { fontSize: '13px', color: '#64748b', margin: '28px 0 0' }