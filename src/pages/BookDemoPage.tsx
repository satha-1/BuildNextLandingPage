import { zodResolver } from '@hookform/resolvers/zod'
import { useState, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../components/ui/Button'
import { Container, PageHero } from '../components/ui/Container'
import { stockImages } from '../content/homeContent'
import { Seo } from '../components/seo/Seo'
import { formOptions } from '../content/copy'
import { siteConfig } from '../content/siteConfig'
import {
  demoRequestSchema,
  submitDemoRequest,
  type DemoRequestPayload,
} from '../lib/demoFormAdapter'
import { cn } from '../lib/cn'

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: ReactNode
}) {
  const errorId = `${id}-error`
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {error ? (
        <p id={errorId} role="alert" className="mt-1 text-sm text-red-800">
          {error}
        </p>
      ) : null}
    </div>
  )
}

const inputClass =
  'w-full rounded-xl border border-navy/[0.08] bg-white px-4 py-3 text-navy shadow-sm transition-all duration-200 outline-none placeholder:text-navy/35 hover:border-navy/15 focus:border-teal focus:ring-4 focus:ring-teal/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal'

export default function BookDemoPage() {
  const [done, setDone] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<DemoRequestPayload>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      fullName: '',
      workEmail: '',
      phone: '',
      companyName: '',
      country: '',
      companyType: '',
      projectRange: '',
      operatingMethod: '',
      challenge: '',
      contactMethod: '',
      consent: false,
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    setSubmitError(null)
    try {
      await submitDemoRequest(values)
      setDone(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'The request could not be recorded.')
    }
  })

  return (
    <>
      <Seo path="/book-demo" />
      <PageHero
        eyebrow="Book a demo"
        title="Let’s map BuildNext360 to your operation"
        copy="Tell us how your company manages sales, projects, contracts, collections, and site operations. We will tailor the demonstration around your workflow."
        image={stockImages.banners.cta}
        watermark="Demo"
      />

      <section className="relative z-10 -mt-14 pb-16 sm:-mt-20 sm:pb-20">
        <Container className="max-w-3xl">
          {done ? (
            <div className="surface-card p-10" role="status">
              <h2 className="font-display text-2xl font-semibold text-navy">
                Thank you. Your demo request has been sent.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Our team will review your details and follow up to schedule a walkthrough mapped to
                your operation
                {siteConfig.email ? (
                  <>
                    . You can also reach us at{' '}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium text-teal hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                    {siteConfig.phone ? (
                      <>
                        , call{' '}
                        <a
                          href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                          className="font-medium text-teal hover:underline"
                        >
                          {siteConfig.phoneDisplay}
                        </a>
                      </>
                    ) : null}
                    {siteConfig.whatsappUrl ? (
                      <>
                        , or message us on{' '}
                        <a
                          href={siteConfig.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#128C7E] hover:underline"
                        >
                          WhatsApp ({siteConfig.whatsappDisplay})
                        </a>
                      </>
                    ) : null}
                  </>
                ) : null}
                .
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="surface-card grid gap-6 p-8 sm:p-10">
              <Field id="fullName" label="Full name" error={form.formState.errors.fullName?.message}>
                <input
                  id="fullName"
                  autoComplete="name"
                  className={inputClass}
                  aria-invalid={!!form.formState.errors.fullName}
                  aria-describedby={form.formState.errors.fullName ? 'fullName-error' : undefined}
                  {...form.register('fullName')}
                />
              </Field>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="workEmail" label="Work email" error={form.formState.errors.workEmail?.message}>
                  <input
                    id="workEmail"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                    aria-invalid={!!form.formState.errors.workEmail}
                    {...form.register('workEmail')}
                  />
                </Field>
                <Field id="phone" label="Phone or WhatsApp number" error={form.formState.errors.phone?.message}>
                  <input
                    id="phone"
                    autoComplete="tel"
                    className={inputClass}
                    aria-invalid={!!form.formState.errors.phone}
                    {...form.register('phone')}
                  />
                </Field>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="companyName" label="Company name" error={form.formState.errors.companyName?.message}>
                  <input id="companyName" className={inputClass} {...form.register('companyName')} />
                </Field>
                <Field id="country" label="Country" error={form.formState.errors.country?.message}>
                  <input id="country" autoComplete="country-name" className={inputClass} {...form.register('country')} />
                </Field>
              </div>
              <Field id="companyType" label="Company type" error={form.formState.errors.companyType?.message}>
                <select id="companyType" className={inputClass} {...form.register('companyType')}>
                  <option value="">Select</option>
                  {formOptions.companyTypes.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                id="projectRange"
                label="Approximate active project range"
                error={form.formState.errors.projectRange?.message}
              >
                <select id="projectRange" className={inputClass} {...form.register('projectRange')}>
                  <option value="">Select</option>
                  {formOptions.projectRanges.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                id="operatingMethod"
                label="Current operating method"
                error={form.formState.errors.operatingMethod?.message}
              >
                <select id="operatingMethod" className={inputClass} {...form.register('operatingMethod')}>
                  <option value="">Select</option>
                  {formOptions.operatingMethods.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                id="challenge"
                label="Main operational challenge"
                error={form.formState.errors.challenge?.message}
              >
                <select id="challenge" className={inputClass} {...form.register('challenge')}>
                  <option value="">Select</option>
                  {formOptions.challenges.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
              <Field
                id="contactMethod"
                label="Preferred contact method"
                error={form.formState.errors.contactMethod?.message}
              >
                <select id="contactMethod" className={inputClass} {...form.register('contactMethod')}>
                  <option value="">Select</option>
                  {formOptions.contactMethods.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
              <div className="flex items-start gap-3 rounded-xl bg-navy/[0.02] p-4 ring-1 ring-navy/[0.06]">
                <input
                  id="consent"
                  type="checkbox"
                  className="mt-0.5 h-4 w-4 rounded accent-teal"
                  aria-invalid={!!form.formState.errors.consent}
                  {...form.register('consent')}
                />
                <label htmlFor="consent" className="text-sm leading-relaxed text-muted">
                  I agree that BuildNext360 may use these details to prepare and schedule a
                  product demonstration.
                </label>
              </div>
              {form.formState.errors.consent ? (
                <p role="alert" className="text-sm text-red-800">
                  {form.formState.errors.consent.message}
                </p>
              ) : null}
              {submitError ? (
                <p role="alert" className="text-sm text-red-800">
                  {submitError}
                </p>
              ) : null}
              <Button type="submit" variant="on-light" disabled={form.formState.isSubmitting} className={cn('justify-self-start')}>
                {form.formState.isSubmitting ? 'Recording…' : 'Submit demo request'}
              </Button>
            </form>
          )}
        </Container>
      </section>
    </>
  )
}
