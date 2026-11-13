/** Unsplash stock imagery — property, land, and construction contexts. */

const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const stockImages = {
  hero: unsplash('photo-1486406146926-c627a92ad1ab', 1920),
  landsProduct: unsplash('photo-1600585154340-be6161a56a0c', 1200),
  constructionProduct: unsplash('photo-1504307651254-35680f356dfd', 1200),
  propertyDevelopers: unsplash('photo-1545324418-cc1a3fa10c00', 800),
  landSales: unsplash('photo-1560518883-ce09059eeffa', 800),
  constructionIndustry: unsplash('photo-1504307651254-35680f356dfd', 800),
  /** Wide photos for full-bleed banner sections. */
  banners: {
    about: unsplash('photo-1545324418-cc1a3fa10c00', 1920),
    cta: unsplash('photo-1503387762-592deb58ef4e', 1920),
    news: unsplash('photo-1581094794329-c8112a89af12', 1920),
    lands: unsplash('photo-1600585154340-be6161a56a0c', 1920),
    construction: unsplash('photo-1504307651254-35680f356dfd', 1920),
    services: unsplash('photo-1552664730-d307ca884978', 1920),
    contact: unsplash('photo-1486406146926-c627a92ad1ab', 1920),
  },
  features: {
    pipeline: unsplash('photo-1556761175-b413da4baf72', 1200),
    inventory: unsplash('photo-1600585154340-be6161a56a0c', 1200),
    reservation: unsplash('photo-1450101499163-c8848c66ca85', 1200),
    collections: unsplash('photo-1554224155-6726b3ff858f', 1200),
    receipts: unsplash('photo-1554224154-22dec7ec8818', 1200),
    projects: unsplash('photo-1504307651254-35680f356dfd', 1200),
  },
  workflow: {
    lead: unsplash('photo-1556761175-b413da4baf72', 600),
    siteVisit: unsplash('photo-1600607687939-ce8a6c25118c', 600),
    reservation: unsplash('photo-1600585154340-be6161a56a0c', 600),
    agreement: unsplash('photo-1450101499163-c8848c66ca85', 600),
    installments: unsplash('photo-1554224155-6726b3ff858f', 600),
    deed: unsplash('photo-1560518883-ce09059eeffa', 600),
    planning: unsplash('photo-1503387762-592deb58ef4e', 600),
    procurement: unsplash('photo-1581094794329-c8112a89af12', 600),
    execution: unsplash('photo-1504917595217-d4dc5ebe6122', 600),
    costControl: unsplash('photo-1454165804606-c3d57bc86b40', 600),
    billing: unsplash('photo-1554224154-22dec7ec8818', 600),
    handover: unsplash('photo-1503387762-592deb58ef4e', 600),
  },
} as const

export const productCards = [
  {
    id: 'lands',
    name: 'BuildNext Lands',
    subtitle: 'Land Sales ERP & CRM',
    description:
      'Manage leads, reservations, agreements, installments, commissions and deed processing.',
    image: stockImages.landsProduct,
    imageAlt: 'Modern property development and master planned community',
    href: '/lands',
    cta: 'Explore BuildNext Lands',
    builtFor: 'Land sellers & developers',
    specs: [
      { icon: 'users', label: 'Leads, site visits & follow-ups' },
      { icon: 'map', label: 'Plot inventory & reservations' },
      { icon: 'wallet', label: 'Installments & collections' },
      { icon: 'file', label: 'Agreements to deed transfer' },
    ],
  },
  {
    id: 'construction',
    name: 'BuildNext Construction',
    subtitle: 'Construction ERP & CRM',
    description:
      'Manage projects, procurement, budgets, inventory, subcontractors and billing.',
    image: stockImages.constructionProduct,
    imageAlt: 'Active construction project with professional site operations',
    href: '/construction',
    cta: 'Explore BuildNext Construction',
    builtFor: 'Contractors & project developers',
    specs: [
      { icon: 'plan', label: 'Project planning & budgets' },
      { icon: 'package', label: 'Procurement & inventory' },
      { icon: 'hardhat', label: 'Site progress & subcontractors' },
      { icon: 'receipt', label: 'Cost control & progress billing' },
    ],
  },
] as const

export const industryChallenges = [
  {
    id: 'developers',
    title: 'Property Developers',
    image: stockImages.propertyDevelopers,
    imageAlt: 'Modern property development skyline',
    points: [
      'Sales, inventory, and finance run on separate systems',
      'Project visibility breaks down across teams',
      'Customer records fragment between sales and legal',
    ],
  },
  {
    id: 'land-sales',
    title: 'Land Sales Companies',
    image: stockImages.landSales,
    imageAlt: 'Residential land development community',
    points: [
      'Lead follow-up lives in spreadsheets and messaging apps',
      'Plot availability shared manually by phone',
      'Collections and deed progress tracked separately',
    ],
  },
  {
    id: 'construction',
    title: 'Construction Companies',
    image: stockImages.constructionIndustry,
    imageAlt: 'Construction site with professional operations',
    points: [
      'Procurement and site progress lack a single source of truth',
      'Cost overruns discovered too late in the cycle',
      'Billing and handover documentation scattered across files',
    ],
  },
] as const

export type WorkflowStage = {
  id: string
  label: string
  description: string
  details: string[]
  image: string
  imageAlt: string
  icon: 'lead' | 'visit' | 'reserve' | 'agreement' | 'payment' | 'deed' | 'plan' | 'procure' | 'execute' | 'cost' | 'bill' | 'handover'
}

export const landsWorkflowStages: WorkflowStage[] = [
  {
    id: 'lead',
    label: 'Lead Capture & Qualification',
    description:
      'Bring every land inquiry into a shared pipeline so ownership, source, and next action are never stuck in personal chats or spreadsheets.',
    details: [
      'Capture walk-ins, calls, campaigns, and referral inquiries in one queue',
      'Assign ownership to sales executives with clear follow-up dates',
      'Track campaign source so marketing spend can be evaluated later',
      'Move qualified buyers into site-visit and quotation stages without re-entry',
    ],
    image: stockImages.workflow.lead,
    imageAlt: 'Business team managing customer inquiries',
    icon: 'lead',
  },
  {
    id: 'site-visit',
    label: 'Site Visit Management',
    description:
      'Schedule visits against real inventory, record buyer interest on the plot, and keep the sales conversation connected to what is actually available.',
    details: [
      'Book visits against specific projects and available plots',
      'Capture buyer feedback and preferred lots during or after the visit',
      'Reduce no-shows with shared schedules visible to the sales desk',
      'Hand qualified interest straight into reservation discussions',
    ],
    image: stockImages.workflow.siteVisit,
    imageAlt: 'Property site visit at a development',
    icon: 'visit',
  },
  {
    id: 'reservation',
    label: 'Plot Reservation',
    description:
      'Hold inventory only when advances are verified — so verbal promises stop creating double-booking and finance disputes.',
    details: [
      'Record advance payments against the selected plot and buyer',
      'Lock lot status to reserved after payment confirmation',
      'Set reservation validity windows and next-due context',
      'Move cleanly from hold to sales agreement without losing history',
    ],
    image: stockImages.workflow.reservation,
    imageAlt: 'Modern residential development plots',
    icon: 'reserve',
  },
  {
    id: 'agreement',
    label: 'Sales Agreement',
    description:
      'Issue agreements with commercial terms and installment schedules that finance can collect against from day one.',
    details: [
      'Generate agreement records linked to buyer, plot, and pricing',
      'Define installment plans that flow into collections automatically',
      'Keep amendment and approval history on the same customer file',
      'Give legal and sales a shared view of committed inventory',
    ],
    image: stockImages.workflow.agreement,
    imageAlt: 'Contract and agreement documentation',
    icon: 'agreement',
  },
  {
    id: 'installments',
    label: 'Installments, Receipts & Recovery',
    description:
      'Collect on schedule with due tracking, receipt generation, reminders, and recovery activity tied to the same buyer account.',
    details: [
      'See upcoming, paid, and overdue installments on one schedule',
      'Generate receipts for advances and installment payments instantly',
      'Coordinate reminders and promise-to-pay without separate trackers',
      'Keep sales and finance aligned on the customer’s payment position',
    ],
    image: stockImages.workflow.installments,
    imageAlt: 'Financial payment and collection workflow',
    icon: 'payment',
  },
  {
    id: 'deed-transfer',
    label: 'Deed & Title Transfer',
    description:
      'Progress legal completion with visibility for internal teams and buyers — from document readiness through final ownership transfer.',
    details: [
      'Track deed milestones and outstanding document requirements',
      'Reduce status chase-ups between sales, legal, and customers',
      'Keep title progress linked to the original sale and payment history',
      'Close the lifecycle with a complete audit trail on the buyer file',
    ],
    image: stockImages.workflow.deed,
    imageAlt: 'Property deed and title completion',
    icon: 'deed',
  },
]

export const constructionWorkflowStages: WorkflowStage[] = [
  {
    id: 'planning',
    label: 'Project Planning',
    description:
      'Define scope, budgets, milestones, and team structure before mobilization so execution starts from an agreed operating plan.',
    details: [
      'Set project structure, phases, and milestone targets',
      'Allocate budgets and ownership before site work begins',
      'Align management, procurement, and site leads on one plan',
      'Create the baseline used later for cost and progress control',
    ],
    image: stockImages.workflow.planning,
    imageAlt: 'Architectural planning and project design',
    icon: 'plan',
  },
  {
    id: 'procurement',
    label: 'Procurement & Materials',
    description:
      'Source materials and subcontractors against approved budgets so purchasing stays connected to project need — not ad-hoc site requests.',
    details: [
      'Raise purchase activity against the correct project and budget line',
      'Track vendor commitments and outstanding deliveries',
      'Reduce duplicate ordering across site and office teams',
      'Keep procurement history available for cost reviews',
    ],
    image: stockImages.workflow.procurement,
    imageAlt: 'Construction procurement and materials',
    icon: 'procure',
  },
  {
    id: 'execution',
    label: 'Site Execution & Progress',
    description:
      'Run daily operations with progress tied to planned milestones so management can see delivery reality, not just planned Gantt charts.',
    details: [
      'Update site progress against agreed work packages',
      'Surface blockers early before they cascade into delays',
      'Give managers a shared view of active project status',
      'Connect field activity to later billing and handover evidence',
    ],
    image: stockImages.workflow.execution,
    imageAlt: 'Construction site execution and progress',
    icon: 'execute',
  },
  {
    id: 'cost-control',
    label: 'Cost Control',
    description:
      'Monitor spend, variations, and budget performance continuously so overruns are spotted while there is still time to act.',
    details: [
      'Compare budget versus actual by project and cost category',
      'Capture variations with clear approval context',
      'Highlight pressure points before month-end surprises',
      'Support management decisions with reliable operational numbers',
    ],
    image: stockImages.workflow.costControl,
    imageAlt: 'Business cost control and financial review',
    icon: 'cost',
  },
  {
    id: 'billing',
    label: 'Progress Billing',
    description:
      'Raise bills and retainage based on certified work completed, with documentation ready for client and finance review.',
    details: [
      'Prepare progress bills from certified completion evidence',
      'Track retainage and outstanding receivables by project',
      'Reduce disputes with clearer billing packages',
      'Keep billing history attached to the project record',
    ],
    image: stockImages.workflow.billing,
    imageAlt: 'Construction billing and invoicing',
    icon: 'bill',
  },
  {
    id: 'handover',
    label: 'Handover & Close-out',
    description:
      'Complete the project with documentation, final accounts, and client sign-off so nothing critical is left in email threads.',
    details: [
      'Assemble completion and close-out documentation in one place',
      'Reconcile final accounts against project history',
      'Capture client sign-off and outstanding snag context',
      'Leave a clean archive for audits and future reference',
    ],
    image: stockImages.workflow.handover,
    imageAlt: 'Completed construction project handover',
    icon: 'handover',
  },
]

export const heroMetrics = [
  {
    id: 'admin-time',
    value: '40%',
    description:
      'Less time spent on manual follow-ups, plot checks, and spreadsheet reconciliation across sales and finance.',
  },
  {
    id: 'faster-decisions',
    value: '3x',
    description:
      'Faster operational decisions with live pipeline, inventory, and collection visibility in one dashboard.',
  },
] as const

export type MainFeature = {
  id: string
  category: string
  tagline: string
  title: string
  description: string
  icon: 'pipeline' | 'inventory' | 'reservation' | 'collections' | 'receipts' | 'projects'
  image: string
  imageAlt: string
}

/** Hero product-card carousel — main platform capabilities. */
export const mainFeatures: MainFeature[] = [
  {
    id: 'pipeline',
    category: 'Sales',
    tagline: 'Inquiry to ownership',
    title: 'Lead & Sales Pipeline',
    description:
      'Capture inquiries, assign ownership, and move buyers from first contact through site visits, quotations, and closed deals.',
    icon: 'pipeline',
    image: stockImages.features.pipeline,
    imageAlt: 'Sales team managing customer inquiries and pipeline',
  },
  {
    id: 'inventory',
    category: 'Inventory',
    tagline: 'Live plot availability',
    title: 'Land & Plot Inventory',
    description:
      'Track projects, plots, and lot status in one register so sales teams always know what is available, reserved, or sold.',
    icon: 'inventory',
    image: stockImages.features.inventory,
    imageAlt: 'Residential land development and plot inventory',
  },
  {
    id: 'reservation',
    category: 'Contracts',
    tagline: 'Money-backed holds',
    title: 'Reservations & Agreements',
    description:
      'Hold inventory against verified advances and issue sales agreements with installment schedules finance can collect against.',
    icon: 'reservation',
    image: stockImages.features.reservation,
    imageAlt: 'Sales agreement and contract documentation',
  },
  {
    id: 'collections',
    category: 'Finance',
    tagline: 'Schedules that stick',
    title: 'Collections & Installments',
    description:
      'Manage payment plans, reminders, and overdue accounts on one customer file—without spreadsheet reconciliation.',
    icon: 'collections',
    image: stockImages.features.collections,
    imageAlt: 'Financial collections and installment management',
  },
  {
    id: 'receipts',
    category: 'Receipts',
    tagline: 'Document every payment',
    title: 'Receipt Generation',
    description:
      'Issue professional receipts for advances and installments instantly — linked to the buyer, plot, and payment record.',
    icon: 'receipts',
    image: stockImages.features.receipts,
    imageAlt: 'Payment receipt generation',
  },
  {
    id: 'projects',
    category: 'Delivery',
    tagline: 'Site to handover',
    title: 'Projects & Construction',
    description:
      'Run planning, procurement, cost control, billing, and handover in connected workflows built for property and construction teams.',
    icon: 'projects',
    image: stockImages.features.projects,
    imageAlt: 'Active construction project and site operations',
  },
]

export const businessBenefits = [
  {
    id: 'visibility',
    title: 'Improve Visibility',
    description: 'See sales, projects, collections, and site progress in one operational view.',
  },
  {
    id: 'manual',
    title: 'Reduce Manual Work',
    description: 'Replace spreadsheets and duplicate data entry with connected workflows.',
  },
  {
    id: 'productivity',
    title: 'Increase Team Productivity',
    description: 'Give each team a workspace designed for how they actually operate.',
  },
  {
    id: 'realtime',
    title: 'Track Operations in Real Time',
    description: 'Monitor pipeline, inventory, site activity, and collections as work happens.',
  },
  {
    id: 'standardize',
    title: 'Standardize Business Processes',
    description: 'Apply consistent approval paths, records, and audit trails across branches.',
  },
  {
    id: 'decisions',
    title: 'Make Better Decisions',
    description: 'Use reliable operational data instead of reconciling disconnected reports.',
  },
] as const
