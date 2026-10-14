import { mainFeatures } from './homeContent'

export const explorerTabs = [
  { id: 'industries', label: 'Industries' },
  { id: 'products', label: 'Products' },
  { id: 'facts', label: 'Fast Facts' },
  { id: 'stories', label: 'Customer Stories' },
  { id: 'sustainability', label: 'Sustainability' },
  { id: 'news', label: 'News & Updates' },
] as const

export type ExplorerTabId = (typeof explorerTabs)[number]['id']

export const explorerIndustries = [
  {
    id: 'land',
    title: 'Land selling companies',
    summary:
      'Bring walk-ins, calls, campaigns, and referrals into one queue. Hold a plot only when the advance is real, and let collections follow the agreement without a second spreadsheet.',
    points: ['Shared inquiry queue', 'Live lot status', 'Installments on the buyer file'],
  },
  {
    id: 'developers',
    title: 'Property developers',
    summary:
      'Keep sales, inventory, and delivery on one record from the first reservation through handover, so project teams are not reconstructing the buyer from email.',
    points: ['Reservation to handover', 'One buyer record', 'Project and sales in view'],
  },
  {
    id: 'real-estate',
    title: 'Real estate businesses',
    summary:
      'Give every listing a follow-up owner, a commission path, and a customer file that still makes sense after the site visit.',
    points: ['Owned follow-ups', 'Commission control', 'Buyer history that stays put'],
  },
  {
    id: 'construction',
    title: 'Construction companies',
    summary:
      'Tie purchasing to approved site demand, watch cost against the budget, and bill from certified completion instead of a folder of variations.',
    points: ['Procurement on budget', 'Cost before overrun', 'Progress billing with history'],
  },
] as const

export const explorerProducts = mainFeatures.map((feature) => ({
  id: feature.id,
  eyebrow: feature.category,
  title: feature.title,
  copy: feature.description,
  image: feature.image,
  imageAlt: feature.imageAlt,
  href: feature.id === 'projects' ? '/construction' : '/lands',
}))

export const explorerFacts = [
  {
    id: 'manual',
    label: 'Less manual work',
    value: '40%',
    copy: 'Less time on follow-ups, plot checks, and spreadsheet reconciliation across sales and finance.',
  },
  {
    id: 'decisions',
    label: 'Faster decisions',
    value: '3×',
    copy: 'Operational decisions with live pipeline, inventory, and collection visibility in one place.',
  },
  {
    id: 'products',
    label: 'Products, one record',
    value: '2',
    copy: 'BuildNext Lands and BuildNext Construction, sharing the customer and project file.',
  },
] as const

export const explorerStories = [
  {
    id: 'availability',
    quote:
      'A buyer calls about a lot. The desk can see available, reserved, or sold before anyone dials another branch.',
    context: 'Plot availability',
    product: 'BuildNext Lands',
  },
  {
    id: 'collections',
    quote:
      'Sales and finance open the same buyer file. Paid, outstanding, and the next installment are already there.',
    context: 'One customer file',
    product: 'BuildNext Lands',
  },
  {
    id: 'site',
    quote:
      'A purchase stays tied to the project budget and the demand the site actually raised — before the order goes out.',
    context: 'Procurement control',
    product: 'BuildNext Construction',
  },
] as const

export const explorerAudiences = [
  'Land selling',
  'Property developers',
  'Real estate',
  'Construction',
] as const

export const sustainabilityImage =
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80'
