export type ScreenshotKey =
  | 'dashboard'
  | 'leads'
  | 'projects'
  | 'agreements'
  | 'payments'
  | 'recovery'
  | 'deeds'
  | 'construction-tender'
  | 'construction-projects'
  | 'construction-procurement'
  | 'construction-execution'
  | 'construction-billing'
  | 'construction-handover'

export type ScreenshotAsset = {
  key: ScreenshotKey
  src: string
  alt: string
  filename: string
  width: number
  height: number
}

const base = (key: ScreenshotKey, filename: string, alt: string): ScreenshotAsset => ({
  key,
  src: `/screenshots/${filename}`,
  filename,
  width: 1440,
  height: 900,
  alt,
})

export const screenshots: Record<ScreenshotKey, ScreenshotAsset> = {
  dashboard: base(
    'dashboard',
    'dashboard.png',
    'BuildNext360 Operations Dashboard with cash position, cash-flow ledger, and sales overview',
  ),
  leads: base('leads', 'leads.webp', 'BuildNext Lands lead pipeline with assigned inquiries'),
  projects: base('projects', 'projects.webp', 'BuildNext Lands land project and plot inventory'),
  agreements: base('agreements', 'agreements.webp', 'BuildNext Lands sales agreements workspace'),
  payments: base('payments', 'payments.webp', 'BuildNext Lands payment ledger and receipts'),
  recovery: base('recovery', 'recovery.webp', 'BuildNext Lands recovery portfolio for overdue accounts'),
  deeds: base('deeds', 'deeds.webp', 'BuildNext Lands deed and legal processing workspace'),
  'construction-tender': base(
    'construction-tender',
    'construction-tender.webp',
    'BuildNext Construction tender evaluation workspace',
  ),
  'construction-projects': base(
    'construction-projects',
    'construction-projects.webp',
    'BuildNext Construction project setup and milestone tracking',
  ),
  'construction-procurement': base(
    'construction-procurement',
    'construction-procurement.webp',
    'BuildNext Construction procurement and purchase orders',
  ),
  'construction-execution': base(
    'construction-execution',
    'construction-execution.webp',
    'BuildNext Construction site execution and progress tracking',
  ),
  'construction-billing': base(
    'construction-billing',
    'construction-billing.webp',
    'BuildNext Construction progress billing workspace',
  ),
  'construction-handover': base(
    'construction-handover',
    'construction-handover.webp',
    'BuildNext Construction project handover and closure',
  ),
}

export const landsGallery: ScreenshotKey[] = [
  'leads',
  'projects',
  'agreements',
  'payments',
  'deeds',
]

export const constructionGallery: ScreenshotKey[] = [
  'construction-projects',
  'construction-procurement',
  'construction-execution',
  'construction-billing',
  'construction-handover',
]

export const productGallery: ScreenshotKey[] = [
  ...landsGallery,
  ...constructionGallery,
]
