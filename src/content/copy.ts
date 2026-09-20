export const fragments = [
  {
    id: 'spreadsheets',
    label: 'Leads inside spreadsheets',
    connectsTo: 'Lead pipeline',
  },
  {
    id: 'calls',
    label: 'Plot availability shared through calls',
    connectsTo: 'Land inventory',
  },
  {
    id: 'notebooks',
    label: 'Follow-ups inside personal notebooks',
    connectsTo: 'Follow-up schedule',
  },
  {
    id: 'manual-pay',
    label: 'Payments checked manually',
    connectsTo: 'Payment ledger',
  },
  {
    id: 'commissions',
    label: 'Commissions calculated separately',
    connectsTo: 'Commission approvals',
  },
  {
    id: 'phone-deed',
    label: 'Deed progress requested by phone',
    connectsTo: 'Deed tracking',
  },
] as const

export const differentiators = [
  {
    id: 'inventory',
    title: 'Inventory Locked by Money',
    copy: 'Approved advance payments can trigger plot reservations, helping maintain a clear connection between verified collections and inventory status.',
  },
  {
    id: 'commission',
    title: 'One Commission Framework',
    copy: 'Manage internal sales incentives and channel-partner earnings with rate configuration, approvals, withdrawals, and payout control.',
  },
  {
    id: 'collections',
    title: 'Collections Before Escalation',
    copy: 'Use installment schedules, automated reminders, recovery portfolios, and promise-to-pay tracking to coordinate collection activity.',
  },
  {
    id: 'visibility',
    title: 'Buyer Visibility Beyond the Sale',
    copy: 'Allow buyers to follow deed and title-processing progress through secure portal experiences and public tracking links.',
  },
] as const

export const managementHighlights = [
  'Role-based operational dashboards',
  'Sales pipeline reporting',
  'Project and inventory visibility',
  'Team and manager performance',
  'Collection and recovery oversight',
  'Management analytics',
  'Audit trails',
] as const

export const deploymentPoints = [
  'Dedicated customer deployment',
  'Configurable company environment',
  'Role-based access',
  'Two-factor authentication',
  'Approval-controlled financial activity',
  'Operational audit trails',
  'Company and branch-aware structure',
] as const

export const faqs = [
  {
    question: 'What is BuildNext360?',
    answer:
      'BuildNext360 is an ERP and CRM platform for property developers, land selling companies, and construction companies. It connects sales, finance, projects, legal, inventory, and management in one system.',
  },
  {
    question: 'How is the software deployed?',
    answer:
      'BuildNext360 can be deployed as a dedicated customer environment with role-based access, approval controls, and configurations tailored to your operating model.',
  },
  {
    question: 'Who is it designed for?',
    answer:
      'Property developers, land selling companies, and construction companies that manage leads, projects, contracts, collections, site operations, and business performance across disconnected tools.',
  },
  {
    question: 'Does a demo include a generic slideshow?',
    answer:
      'No. Demonstrations follow your actual workflows—whether that is land sales from inquiry to deed transfer or construction from tender to handover.',
  },
] as const

export const formOptions = {
  companyTypes: [
    'Property Developer',
    'Land Selling Company',
    'Construction Company',
    'Real Estate Developer',
    'Land Investment Company',
    'Other',
  ],
  projectRanges: ['1–2 active projects', '3–5', '6–10', '11 or more'],
  operatingMethods: [
    'Spreadsheets',
    'Accounting Software',
    'Generic CRM',
    'Generic ERP',
    'Custom Software',
    'Mostly Manual',
    'Other',
  ],
  challenges: [
    'Lead Follow-Up',
    'Plot Inventory',
    'Reservations',
    'Installment Collections',
    'Commissions',
    'Legal and Deed Processing',
    'Reporting and Visibility',
    'Multiple Disconnected Systems',
  ],
  contactMethods: ['Email', 'Phone', 'WhatsApp'],
} as const

export type RouteSeo = {
  path: string
  title: string
  description: string
}

export const routeSeo: Record<string, RouteSeo> = {
  '/': {
    path: '/',
    title: 'BuildNext360 | ERP & CRM for Property, Land & Construction',
    description:
      'ERP & CRM software for land selling companies, property developers, real estate businesses, and construction companies. Digitize sales, projects, operations, and finance through industry-focused enterprise software.',
  },
  '/lands': {
    path: '/lands',
    title: 'BuildNext Lands | Land Sales ERP & CRM',
    description:
      'Land sales ERP and CRM for property developers and land selling companies. Manage leads, reservations, agreements, installments, commissions, and deed processing.',
  },
  '/construction': {
    path: '/construction',
    title: 'BuildNext Construction | Construction ERP & CRM',
    description:
      'Construction ERP and CRM for project-driven businesses. Manage planning, procurement, execution, cost control, billing, and handover.',
  },
  '/book-demo': {
    path: '/book-demo',
    title: 'Book a Demo | BuildNext360 ERP & CRM',
    description:
      'Request a personalized BuildNext360 demonstration mapped to how your company manages sales, projects, contracts, collections, and site operations.',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact | BuildNext360 ERP & CRM',
    description:
      'Contact the BuildNext360 team about land sales ERP, construction ERP, demos, implementation, and product questions for property and construction businesses.',
  },
  '/services': {
    path: '/services',
    title: 'Services | Implementation, Integrations & Support | BuildNext360',
    description:
      'BuildNext360 services include implementation, AWS and Azure cloud integration, up to 2 months of free technical support, and paid add-on integrations such as QuickBooks and HRIS when needed.',
  },
}
