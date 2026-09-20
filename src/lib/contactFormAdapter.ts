import { z } from 'zod'
import { deliverFormPayload } from './formEmailDelivery'

export const contactRequestSchema = z.object({
  firstName: z.string().trim().min(1, 'Enter your first name.'),
  lastName: z.string().trim().min(1, 'Enter your last name.'),
  email: z.string().trim().email('Enter a valid email address.'),
  companyName: z.string().trim().min(2, 'Enter your company name.'),
  message: z.string().trim().min(10, 'Share a short message (at least 10 characters).'),
})

export type ContactRequestPayload = z.infer<typeof contactRequestSchema>

const STORAGE_KEY = 'buildnext-contact-requests'

export type ContactSubmitResult = {
  storedLocally: boolean
  forwardedToApi: boolean
  emailed: boolean
}

/**
 * Contact form adapter.
 * Prefer VITE_DEMO_API_URL; otherwise emails CONTACT_EMAIL via FormSubmit.
 */
export async function submitContactRequest(
  payload: ContactRequestPayload,
): Promise<ContactSubmitResult> {
  const record = {
    ...payload,
    submittedAt: new Date().toISOString(),
    source: 'buildnext-contact',
    type: 'contact',
  }

  return deliverFormPayload({
    subject: `BuildNext360 contact — ${payload.firstName} ${payload.lastName}`,
    storageKey: STORAGE_KEY,
    record,
  })
}
