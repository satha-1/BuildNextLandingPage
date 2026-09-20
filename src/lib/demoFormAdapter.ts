import { z } from 'zod'
import { deliverFormPayload } from './formEmailDelivery'

export const demoRequestSchema = z.object({
  fullName: z.string().trim().min(2, 'Enter your full name.'),
  workEmail: z.string().trim().email('Enter a valid work email.'),
  phone: z.string().trim().min(7, 'Enter a phone or WhatsApp number.'),
  companyName: z.string().trim().min(2, 'Enter your company name.'),
  country: z.string().trim().min(2, 'Enter your country.'),
  companyType: z.string().min(1, 'Select a company type.'),
  projectRange: z.string().min(1, 'Select an approximate project range.'),
  operatingMethod: z.string().min(1, 'Select your current operating method.'),
  challenge: z.string().min(1, 'Select the main operational challenge.'),
  contactMethod: z.string().min(1, 'Select a preferred contact method.'),
  consent: z
    .boolean()
    .refine((value) => value === true, { message: 'Consent is required to record this request.' }),
})

export type DemoRequestPayload = z.infer<typeof demoRequestSchema>

const STORAGE_KEY = 'buildnext-lands-demo-requests'

export type DemoSubmitResult = {
  storedLocally: boolean
  forwardedToApi: boolean
  emailed: boolean
}

/**
 * Demo request adapter.
 * Prefer VITE_DEMO_API_URL; otherwise emails CONTACT_EMAIL via FormSubmit.
 */
export async function submitDemoRequest(payload: DemoRequestPayload): Promise<DemoSubmitResult> {
  const record = {
    ...payload,
    submittedAt: new Date().toISOString(),
    source: 'buildnext-lands-marketing',
    type: 'demo-request',
  }

  return deliverFormPayload({
    subject: `BuildNext360 demo request — ${payload.fullName} (${payload.companyName})`,
    storageKey: STORAGE_KEY,
    record,
  })
}
