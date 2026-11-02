import { useState } from 'react'
import { Button, Section } from './ui'
import { contact, hero, links } from '../content'

const copyLabels = { idle: 'Copy', copied: 'Copied', failed: 'Copy failed' }

// In-app browsers (the LinkedIn app, for one) can block the Clipboard API.
function copyWithSelection(text) {
  const field = document.createElement('textarea')
  field.value = text
  field.className = 'fixed opacity-0'
  document.body.append(field)
  field.select()
  const copied = document.execCommand('copy')
  field.remove()
  return copied
}

export default function Contact() {
  const [copyState, setCopyState] = useState('idle')

  async function copyEmail() {
    let copied
    try {
      await navigator.clipboard.writeText(contact.email)
      copied = true
    } catch {
      copied = copyWithSelection(contact.email)
    }
    setCopyState(copied ? 'copied' : 'failed')
    setTimeout(() => setCopyState('idle'), 2000)
  }

  return (
    <Section id="contact" title="Contact">
      <div className="space-y-3 font-mono text-sm">
        <p className="flex flex-wrap items-center gap-3">
          <span className="break-all">{contact.email}</span>
          <button
            type="button"
            onClick={copyEmail}
            aria-live="polite"
            className="rounded border border-line px-2 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-ink"
          >
            {copyLabels[copyState]}
          </button>
        </p>
        <p>
          <a href={`tel:${contact.phone.replaceAll(' ', '')}`} className="transition-colors hover:text-accent">
            {contact.phone}
          </a>
        </p>
        <p className="text-muted">{hero.location}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={links.linkedin}>LinkedIn</Button>
        <Button href={links.presentation}>Work presentation</Button>
      </div>
    </Section>
  )
}
