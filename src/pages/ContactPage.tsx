import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, CheckCircle2, Clock3, Mail, Phone, Users } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Seo } from '../components/seo/Seo'
import { Button, ButtonLink } from '../components/ui/Button'
import { Container, PageHero } from '../components/ui/Container'
import { stockImages } from '../content/homeContent'
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon'
import { contactHeroHighlights, contactTopics } from '../content/contact'
import { siteConfig } from '../content/siteConfig'
import {
  contactRequestSchema,
  submitContactRequest,
  type ContactRequestPayload,
} from '../lib/contactFormAdapter'
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
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-800">
          {error}
        </p>
      ) : null}
    </div>
  )
}

const inputClass =
  'w-full rounded-xl border border-navy/[0.08] bg-surface px-4 py-3 text-navy shadow-sm transition-all duration-200 outline-none placeholder:text-navy/35 hover:border-navy/15 focus:border-teal focus:bg-white focus:ring-4 focus:ring-teal/10'

const heroIcons = {
  users: Users,
  clock: Clock3,
} as const

export default function ContactPage() {
  const [done, setDone] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const form = useForm<ContactRequestPayload>({
    resolver: zodResolver(contactRequestSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      message: '',
    },
  })

  const onSubmit = form.handleSubmit(async (values) => {
    setSubmitError(null)
    try {
      await submitContactRequest(values)
      setDone(true)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Your message could not be recorded.')
    }
  })

  const email = siteConfig.email
  const phone = siteConfig.phone
  const phoneDisplay = siteConfig.phoneDisplay
  const whatsappUrl = siteConfig.whatsappUrl
  const whatsappDisplay = siteConfig.whatsappDisplay

  return (
    <>
      <Seo path="/contact" />

      <PageHero
        eyebrow={`Contact ${siteConfig.productName}`}
        title="Speak with the BuildNext360 team"
        copy="Product fit, demos, implementation, or commercial questions — reach us by form, email, phone, or WhatsApp and we will guide the next step."
        image={stockImages.banners.contact}
        watermark="Contact"
        overlap={
          <div className="grid overflow-hidden rounded-[1.5rem] bg-white shadow-[0_40px_100px_-30px_rgb(6_13_24/55%)] ring-1 ring-navy/[0.06] md:grid-cols-2">
            {contactHeroHighlights.map((item, index) => {
              const Icon = heroIcons[item.icon]
              return (
                <div
                  key={item.id}
                  className={cn(
                    'flex items-start gap-5 p-7 sm:p-8',
                    index > 0 && 'border-t border-navy/[0.06] md:border-l md:border-t-0',
                  )}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <h2 className="font-display text-base font-extrabold uppercase tracking-tight text-navy">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        }
      />

      <section className="bg-surface py-14 sm:py-20">
        <Container>
          <div className="grid min-w-0 items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
            <div className="surface-card min-w-0 p-7 sm:p-9">
              <span className="inline-flex rounded-full bg-teal/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
                Send a message
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-navy sm:text-3xl">
                Share a few details — we will follow up.
              </h2>

              {done ? (
                <div className="mt-8 rounded-2xl bg-teal/[0.06] p-6 ring-1 ring-teal/15" role="status">
                  <h3 className="font-display text-xl font-semibold text-navy">Message sent</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Thank you. Your message has been sent to the BuildNext360 team
                    {email ? (
                      <>
                        {' '}
                        at{' '}
                        <a href={`mailto:${email}`} className="font-medium text-teal hover:underline">
                          {email}
                        </a>
                      </>
                    ) : null}
                    . Prefer a guided walkthrough?{' '}
                    <Link to="/book-demo" className="font-medium text-teal hover:underline">
                      Book a demo
                    </Link>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      id="firstName"
                      label="First name"
                      error={form.formState.errors.firstName?.message}
                    >
                      <input
                        id="firstName"
                        autoComplete="given-name"
                        className={inputClass}
                        aria-invalid={!!form.formState.errors.firstName}
                        {...form.register('firstName')}
                      />
                    </Field>
                    <Field
                      id="lastName"
                      label="Last name"
                      error={form.formState.errors.lastName?.message}
                    >
                      <input
                        id="lastName"
                        autoComplete="family-name"
                        className={inputClass}
                        aria-invalid={!!form.formState.errors.lastName}
                        {...form.register('lastName')}
                      />
                    </Field>
                  </div>
                  <Field
                    id="email"
                    label="Email address"
                    error={form.formState.errors.email?.message}
                  >
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className={inputClass}
                      aria-invalid={!!form.formState.errors.email}
                      {...form.register('email')}
                    />
                  </Field>
                  <Field
                    id="companyName"
                    label="Company name"
                    error={form.formState.errors.companyName?.message}
                  >
                    <input
                      id="companyName"
                      autoComplete="organization"
                      className={inputClass}
                      aria-invalid={!!form.formState.errors.companyName}
                      {...form.register('companyName')}
                    />
                  </Field>
                  <Field
                    id="message"
                    label="Message"
                    error={form.formState.errors.message?.message}
                  >
                    <textarea
                      id="message"
                      rows={5}
                      className={cn(inputClass, 'resize-y min-h-[8rem]')}
                      placeholder="Tell us about your operation, product interest, or question…"
                      aria-invalid={!!form.formState.errors.message}
                      {...form.register('message')}
                    />
                  </Field>
                  {submitError ? (
                    <p role="alert" className="text-sm text-red-800">
                      {submitError}
                    </p>
                  ) : null}
                  <Button
                    type="submit"
                    variant="on-light"
                    disabled={form.formState.isSubmitting}
                    className="w-full"
                  >
                    {form.formState.isSubmitting ? 'Sending…' : 'Send message'}
                  </Button>
                  <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-navy/40">
                    Our team will get back to you
                  </p>
                </form>
              )}
            </div>

            <div className="grid min-w-0 gap-6">
              <div className="surface-card p-7 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-navy">Talk to us directly</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Prefer email, a phone call, or WhatsApp? Reach the {siteConfig.company} team
                  through the channels below.
                </p>

                <div className="mt-6 space-y-3">
                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="group flex items-center gap-4 rounded-2xl border border-navy/[0.06] bg-surface px-4 py-4 transition-colors hover:border-teal/30 hover:bg-teal/[0.04]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/[0.12] text-teal">
                        <Mail className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                          Email us
                        </span>
                        <span className="mt-0.5 block truncate text-sm font-semibold text-navy">
                          {email}
                        </span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-teal transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-navy/[0.06] bg-surface px-4 py-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/[0.12] text-teal">
                        <Mail className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                          Email us
                        </span>
                        <span className="mt-0.5 block text-sm text-muted">
                          Send a message with the form — we reply from the sales inbox.
                        </span>
                      </span>
                    </div>
                  )}

                  {phone ? (
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="group flex items-center gap-4 rounded-2xl border border-navy/[0.06] bg-surface px-4 py-4 transition-colors hover:border-teal/30 hover:bg-teal/[0.04]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/[0.12] text-teal">
                        <Phone className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                          Call us
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold text-navy">
                          {phoneDisplay}
                        </span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-teal transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </a>
                  ) : (
                    <Link
                      to="/book-demo"
                      className="group flex items-center gap-4 rounded-2xl border border-navy/[0.06] bg-surface px-4 py-4 transition-colors hover:border-teal/30 hover:bg-teal/[0.04]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/[0.12] text-teal">
                        <Phone className="h-5 w-5" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                          Prefer a call?
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold text-navy">
                          Book a demo and we will schedule it
                        </span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-teal transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  )}

                  {whatsappUrl ? (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-navy/[0.06] bg-surface px-4 py-4 transition-colors hover:border-[#25D366]/40 hover:bg-[#25D366]/[0.06]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#25D366]">
                        <WhatsAppIcon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                          WhatsApp
                        </span>
                        <span className="mt-0.5 block text-sm font-semibold text-navy">
                          {whatsappDisplay}
                        </span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-[#25D366] transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="surface-card p-7 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-navy">
                  Sales &amp; support
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  For product questions, implementation guidance, or commercial conversations about
                  BuildNext Lands, BuildNext Construction, or the full platform.
                </p>
                <div className="mt-5 space-y-3 rounded-2xl border border-navy/[0.06] bg-surface p-5">
                  {email ? (
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Email
                      </p>
                      <a
                        href={`mailto:${email}`}
                        className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-teal transition-colors hover:text-teal-light"
                      >
                        {email}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </a>
                    </div>
                  ) : null}
                  {phone ? (
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        Phone
                      </p>
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-teal"
                      >
                        {phoneDisplay}
                      </a>
                    </div>
                  ) : null}
                  {whatsappUrl ? (
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                        WhatsApp
                      </p>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-[#128C7E] transition-colors hover:text-[#25D366]"
                      >
                        <WhatsAppIcon className="h-4 w-4" />
                        {whatsappDisplay}
                      </a>
                    </div>
                  ) : null}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Website
                    </p>
                    <p className="mt-1 text-sm font-semibold text-navy">{siteConfig.domain}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card mt-8 grid min-w-0 gap-8 p-7 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
                Bring us your questions
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                Whether you are comparing tools or planning a rollout, we can help you map
                BuildNext360 to how your teams actually work.
              </p>
              <ul className="mt-6 space-y-3">
                {contactTopics.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-sm text-navy/80">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-navy/[0.06] bg-surface p-6 sm:p-7">
              <h3 className="font-display text-xl font-semibold text-navy">
                Need a guided session instead?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Book a personalized demo mapped to your land sales or construction workflows.
              </p>
              <div className="mt-6">
                <ButtonLink to="/book-demo" variant="primary">
                  Book a demo
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
