import { CONTACT_EMAIL, DEMO_API_URL } from '../content/siteConfig'

export type FormDeliveryResult = {
  storedLocally: boolean
  forwardedToApi: boolean
  emailed: boolean
}

type DeliveryOptions = {
  subject: string
  storageKey: string
  record: Record<string, unknown>
}

/**
 * Delivers a form payload to:
 * 1. localStorage (always, when available)
 * 2. VITE_DEMO_API_URL when configured
 * 3. otherwise FormSubmit → CONTACT_EMAIL (static-site email delivery)
 */
export async function deliverFormPayload({
  subject,
  storageKey,
  record,
}: DeliveryOptions): Promise<FormDeliveryResult> {
  let storedLocally = false
  try {
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]') as unknown[]
    existing.push(record)
    localStorage.setItem(storageKey, JSON.stringify(existing))
    storedLocally = true
  } catch {
    storedLocally = false
  }

  let forwardedToApi = false
  let emailed = false

  if (DEMO_API_URL) {
    const response = await fetch(DEMO_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record),
    })
    if (!response.ok) {
      throw new Error('Your request could not be delivered to the configured endpoint.')
    }
    forwardedToApi = true
    return { storedLocally, forwardedToApi, emailed }
  }

  if (CONTACT_EMAIL) {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        ...record,
        _subject: subject,
        _template: 'table',
        _captcha: 'false',
      }),
    })

    if (!response.ok) {
      throw new Error('Your request could not be emailed. Please try again or contact us directly.')
    }

    emailed = true
  }

  return { storedLocally, forwardedToApi, emailed }
}
