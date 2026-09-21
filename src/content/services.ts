import { stockImages } from './homeContent'

const unsplash = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const serviceImages = {
  hero: stockImages.constructionProduct,
  implementation: unsplash('photo-1552664730-d307ca884978', 1000),
  cloud: unsplash('photo-1451187580459-43490279c0fa', 1000),
  support: unsplash('photo-1522071820081-009f0129c71c', 1000),
  chatbot: '/images/services-chatbot.jpg',
  integrations: '/images/services-integrations.jpg',
  process: unsplash('photo-1503387762-592deb58ef4e', 1200),
} as const

export type ServiceStatus = 'available' | 'coming'

export const serviceOfferings: Array<{
  id: 'implementation' | 'cloud-integration' | 'support' | 'chatbot'
  status: ServiceStatus
  title: string
  summary: string
  image: string
  imageAlt: string
  points: readonly string[]
}> = [
  {
    id: 'implementation',
    status: 'available',
    title: 'Implementation Service',
    summary:
      'We configure BuildNext360 around your sales, inventory, finance, and project workflows so teams can go live with confidence.',
    image: serviceImages.implementation,
    imageAlt: 'Team collaborating on software implementation planning',
    points: [
      'Discovery workshops mapped to your land sales or construction process',
      'Environment setup, roles, approvals, and master data configuration',
      'User onboarding, training sessions, and go-live support',
      'Handover documentation for administrators and department leads',
    ],
  },
  {
    id: 'cloud-integration',
    status: 'available',
    title: 'Cloud Integration Service',
    summary:
      'Deploy and connect BuildNext360 on major cloud platforms — including AWS and Azure — with secure environment setup, connectivity, and operational readiness support.',
    image: serviceImages.cloud,
    imageAlt: 'Cloud infrastructure and connected systems',
    points: [
      'AWS and Azure deployment and environment alignment',
      'Secure connectivity between BuildNext360 and approved cloud services',
      'Environment health checks and operational readiness reviews',
      'Guidance for hosting, networking, and production cutover on cloud',
    ],
  },
  {
    id: 'support',
    status: 'available',
    title: 'Technical Support (Up to 2 Months Free)',
    summary:
      'After go-live, receive up to two months of free technical support to stabilize adoption, resolve issues, and guide day-to-day usage.',
    image: serviceImages.support,
    imageAlt: 'Professional team providing technical support',
    points: [
      'Ticket-based issue triage for configuration and usage questions',
      'Guidance for sales, finance, and operations teams during early adoption',
      'Priority handling for blockers that affect collections or inventory',
      'Free support window of up to 2 months from go-live or service start',
    ],
  },
  {
    id: 'chatbot',
    status: 'available',
    title: 'Chatbot Service',
    summary:
      'Add an AI-assisted chatbot to BuildNext360 so customers and internal teams get faster answers on plots, projects, payments, and common operational questions.',
    image: serviceImages.chatbot,
    imageAlt: 'Laptop and phone showing a business chatbot conversation',
    points: [
      'Customer-facing answers for availability, installment, and status questions',
      'Internal help for sales and operations teams on process and product usage',
      'Configured to your BuildNext Lands or Construction workflows',
      'Scoped as a service add-on and delivered with your rollout or after go-live',
    ],
  },
]

export const serviceFeatures = [
  {
    id: 'workflow-setup',
    title: 'Workflow configuration',
    description:
      'Lead-to-deed or project-to-handover paths configured to match how your teams already operate.',
  },
  {
    id: 'role-access',
    title: 'Roles & access control',
    description:
      'Role-based permissions for sales, finance, recovery, legal, site, and management users.',
  },
  {
    id: 'data-migration',
    title: 'Data & inventory readiness',
    description:
      'Assistance preparing plots, customers, projects, and opening balances for a clean start.',
  },
  {
    id: 'training',
    title: 'Team training',
    description:
      'Hands-on sessions so each department knows where work starts, updates, and closes.',
  },
  {
    id: 'go-live',
    title: 'Go-live assistance',
    description:
      'Cutover support when you move from spreadsheets or legacy tools into BuildNext360.',
  },
  {
    id: 'stabilization',
    title: 'Post-go-live stabilization',
    description:
      'Up to 2 months of free technical support while processes settle and teams build confidence.',
  },
] as const

export const integrationSystems = [
  {
    id: 'quickbooks',
    title: 'QuickBooks',
    description:
      'Connect invoices, receipts, and ledger updates with QuickBooks as a separate paid integration service when your accounting team needs it.',
    badge: 'Paid service',
  },
  {
    id: 'hris',
    title: 'HRIS systems',
    description:
      'Link employee and workforce records from your HRIS as a paid add-on — not included in standard implementation delivery.',
    badge: 'Paid service',
  },
  {
    id: 'accounting',
    title: 'Accounting & ERP finance',
    description:
      'Other finance platforms beyond QuickBooks can be assessed as paid integration work when chart-of-accounts mapping is required.',
    badge: 'Paid service',
  },
  {
    id: 'crm-comms',
    title: 'CRM & communication tools',
    description:
      'Extend lead and customer touchpoints with approved messaging or CRM systems as a scoped paid engagement.',
    badge: 'Paid service',
  },
  {
    id: 'payment',
    title: 'Payments & collections rails',
    description:
      'Wire payment confirmations into installment and recovery workflows where supported — quoted separately from delivery.',
    badge: 'Paid service',
  },
  {
    id: 'custom',
    title: 'Custom / other systems',
    description:
      'Need another platform in the mix? We can assess API-based integrations as a paid service for tools unique to your business.',
    badge: 'Paid service',
  },
] as const

export const serviceProcess = [
  {
    step: '01',
    title: 'Scope',
    description: 'Confirm products, workflows, and success criteria for your rollout.',
  },
  {
    step: '02',
    title: 'Configure',
    description: 'Set up environments, roles, data structures, and key process paths.',
  },
  {
    step: '03',
    title: 'Train & go live',
    description: 'Train teams, cut over from legacy tools, and launch with operational readiness.',
  },
  {
    step: '04',
    title: 'Support',
    description: 'Stabilize with up to 2 months of free technical support after go-live.',
  },
] as const

export const serviceFaqs = [
  {
    question: 'What is included in the Implementation Service?',
    answer:
      'Implementation covers discovery workshops, environment setup, role and approval configuration, master data readiness, team training, go-live assistance, and handover documentation tailored to BuildNext Lands, BuildNext Construction, or both. Third-party system integrations are not included.',
  },
  {
    question: 'Is technical support really free for up to 2 months?',
    answer:
      'Yes. After go-live (or the agreed service start), you receive up to two months of free technical support for configuration questions, usage guidance, and priority blockers that affect inventory, collections, or daily operations.',
  },
  {
    question: 'What is the Cloud Integration Service?',
    answer:
      'Cloud Integration is available for deployments on major providers such as AWS and Azure. It covers environment alignment, secure connectivity, health checks, and readiness support so BuildNext360 can run reliably in your cloud.',
  },
  {
    question: 'Can you integrate QuickBooks or an HRIS?',
    answer:
      'Yes — QuickBooks and HRIS integrations can be done when needed, but they are paid services. They are not included in standard implementation delivery and are scoped and quoted separately.',
  },
  {
    question: 'How long does a typical implementation take?',
    answer:
      'Timelines depend on company size, number of workflows, and data readiness. After scoping, we share a phased plan covering configuration, training, cutover, and the free support window. Paid integrations, if required, follow their own schedule.',
  },
  {
    question: 'Do you train our sales, finance, and site teams?',
    answer:
      'Yes. Training is role-based so each department learns the screens and steps they use every day—sales, finance, recovery, legal, site, or management—rather than a generic walkthrough.',
  },
  {
    question: 'What happens after the free support period ends?',
    answer:
      'You can continue with an ongoing support arrangement if needed, or operate independently with your trained administrators. We discuss options before the free window closes so there is no surprise gap.',
  },
  {
    question: 'Do you provide a chatbot?',
    answer:
      'Yes. Chatbot is available as a BuildNext360 service. We configure it for customer or internal use cases — such as plot or project questions, payment status, and common process guidance — and scope it alongside your implementation or as a follow-on engagement.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Book a demo or contact the team with your company type, current tools, and priority workflows. We will recommend the right product mix, implementation scope, chatbot needs, and whether any paid integrations are needed.',
  },
] as const
