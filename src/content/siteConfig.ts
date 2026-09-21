function trimEnv(value: string | undefined): string {
  return (value || '').trim()
}

/** Ignore localhost API targets in production builds (common Vercel misconfig). */
function resolveDemoApiUrl(raw: string | undefined): string {
  const value = trimEnv(raw)
  if (!value) return ''
  if (!import.meta.env.DEV && /localhost|127\.0\.0\.1/i.test(value)) {
    return ''
  }
  return value
}

function digitsOnly(value: string): string {
  return value.replace(/\D/g, '')
}

function formatPhoneDisplay(phone: string): string {
  const digits = digitsOnly(phone)
  if (digits === '94707564530') return '+94 70 756 4530'
  if (digits === '94761835346') return '+94 76 183 5346'
  return phone
}

export const DEMO_APP_URL = import.meta.env.VITE_DEMO_APP_URL || '#'
export const DEMO_API_URL = resolveDemoApiUrl(import.meta.env.VITE_DEMO_API_URL)
export const SITE_URL = trimEnv(import.meta.env.VITE_SITE_URL || 'https://buildnext360.com').replace(
  /\/$/,
  '',
)
export const CONTACT_EMAIL = trimEnv(import.meta.env.VITE_CONTACT_EMAIL || 'info@buildnext360.com')
export const CONTACT_PHONE = trimEnv(import.meta.env.VITE_CONTACT_PHONE || '+94707564530')
export const CONTACT_WHATSAPP = trimEnv(import.meta.env.VITE_CONTACT_WHATSAPP || '+94761835346')

export const CONTACT_PHONE_DISPLAY = formatPhoneDisplay(CONTACT_PHONE)
export const CONTACT_WHATSAPP_DISPLAY = formatPhoneDisplay(CONTACT_WHATSAPP)
export const CONTACT_WHATSAPP_URL = CONTACT_WHATSAPP
  ? `https://wa.me/${digitsOnly(CONTACT_WHATSAPP)}`
  : ''

export const siteConfig = {
  productName: 'BuildNext360',
  category: 'ERP & CRM for Property, Land & Construction',
  positioning:
    'ERP & CRM software for land selling companies, property developers, real estate businesses, and construction companies.',
  company: 'BuildNext360',
  legalName: 'BuildNext360',
  domain: 'buildnext360.com',
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE,
  phoneDisplay: CONTACT_PHONE_DISPLAY,
  whatsapp: CONTACT_WHATSAPP,
  whatsappDisplay: CONTACT_WHATSAPP_DISPLAY,
  whatsappUrl: CONTACT_WHATSAPP_URL,
  seoKeywords:
    'BuildNext360, land sales ERP, construction ERP, property CRM, real estate software, plot management, construction project management, installment collections, QuickBooks integration, HRIS integration, business chatbot',
  demoAppConfigured: DEMO_APP_URL !== '#' && DEMO_APP_URL.trim().length > 0,
  demoApiConfigured: DEMO_API_URL.trim().length > 0,
} as const

export const targetIndustries = [
  'Land Selling Companies',
  'Property Developers',
  'Real Estate Businesses',
  'Construction Companies',
] as const

export const defaultTitle = `${siteConfig.productName} | ERP & CRM for Property, Land & Construction`
export const defaultDescription =
  'BuildNext360 provides ERP & CRM software for land selling companies, property developers, real estate businesses, and construction companies. Digitize sales, projects, operations, and finance through industry-focused enterprise software.'
