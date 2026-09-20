import { stockImages } from './homeContent'

export type FeatureDetail = {
  id: string
  title: string
  copy: string
  previewRows: Array<{ label: string; value: string; tone?: 'ok' | 'warn' | 'muted' }>
}

export type PlatformFeature = {
  id: string
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  details: FeatureDetail[]
}

/** Homepage: main features stacked; each has an inner details carousel. */
export const platformFeatures: PlatformFeature[] = [
  {
    id: 'pipeline',
    eyebrow: 'Capture and convert',
    title: 'Lead & Sales Pipeline',
    description:
      'Track every inquiry from first contact to closed deal. Assign ownership, schedule follow-ups, and keep sales managers clear on what moves next.',
    image: stockImages.features.pipeline,
    imageAlt: 'Sales pipeline and inquiry management',
    details: [
      {
        id: 'inquiry-capture',
        title: 'Inquiry capture',
        copy: 'Bring walk-ins, calls, campaigns, and referrals into one shared queue.',
        previewRows: [
          { label: 'New inquiry', value: 'Unassigned', tone: 'warn' },
          { label: 'Source', value: 'Facebook Ads', tone: 'muted' },
          { label: 'Project interest', value: 'Green Valley', tone: 'ok' },
          { label: 'Next action', value: 'Call back', tone: 'warn' },
        ],
      },
      {
        id: 'ownership',
        title: 'Owned follow-ups',
        copy: 'Assign leads to sales executives with clear next actions and due dates.',
        previewRows: [
          { label: 'Assignee', value: 'A. Perera', tone: 'ok' },
          { label: 'Follow-up due', value: 'Today 4:00 PM', tone: 'warn' },
          { label: 'Stage', value: 'Qualified', tone: 'ok' },
          { label: 'Touches this week', value: '3', tone: 'muted' },
        ],
      },
      {
        id: 'conversion',
        title: 'Conversion tracking',
        copy: 'See which inquiries turn into visits, reservations, and closed sales.',
        previewRows: [
          { label: 'Site visit booked', value: 'Tomorrow', tone: 'ok' },
          { label: 'Quotation sent', value: 'Awaiting reply', tone: 'muted' },
          { label: 'Hot lead score', value: 'High', tone: 'ok' },
          { label: 'Pipeline value', value: 'LKR 12.4M', tone: 'ok' },
        ],
      },
    ],
  },
  {
    id: 'inventory',
    eyebrow: 'Know what is available',
    title: 'Land & Plot Inventory',
    description:
      'Maintain project sites, plot status, and pricing in one register so sales never promise a lot that is already reserved or sold.',
    image: stockImages.features.inventory,
    imageAlt: 'Land and plot inventory management',
    details: [
      {
        id: 'lot-status',
        title: 'Live lot status',
        copy: 'Available, reserved, and sold stay synchronized with sales activity.',
        previewRows: [
          { label: 'Block A / Lot 12', value: 'Available', tone: 'ok' },
          { label: 'Block B / Lot 04', value: 'Reserved', tone: 'warn' },
          { label: 'Block C / Lot 21', value: 'Sold', tone: 'muted' },
          { label: 'Open inventory', value: '148 plots', tone: 'ok' },
        ],
      },
      {
        id: 'project-sites',
        title: 'Project & site register',
        copy: 'Organize inventory by project, block, and pricing so teams share one map of stock.',
        previewRows: [
          { label: 'Active projects', value: '6 sites', tone: 'ok' },
          { label: 'Avg. plot price', value: 'LKR 4.2M', tone: 'muted' },
          { label: 'New listings', value: '18 this month', tone: 'ok' },
          { label: 'Held inventory', value: '23 lots', tone: 'warn' },
        ],
      },
      {
        id: 'sales-ready',
        title: 'Sales-ready availability',
        copy: 'Give the sales desk instant answers without phone checks between branches.',
        previewRows: [
          { label: 'Ready to sell', value: '112 plots', tone: 'ok' },
          { label: 'Under offer', value: '9 lots', tone: 'warn' },
          { label: 'Blocked / hold', value: '4 lots', tone: 'muted' },
          { label: 'Last sync', value: 'Just now', tone: 'ok' },
        ],
      },
    ],
  },
  {
    id: 'reservation',
    eyebrow: 'Money-backed commitments',
    title: 'Reservations & Agreements',
    description:
      'Hold plots against verified advances, then issue sales agreements with installment schedules finance can collect against without re-keying terms.',
    image: stockImages.features.reservation,
    imageAlt: 'Reservation and sales agreement workflow',
    details: [
      {
        id: 'advance-holds',
        title: 'Advance-linked holds',
        copy: 'Reservations lock inventory only after payment confirmation.',
        previewRows: [
          { label: 'Advance received', value: 'LKR 250,000', tone: 'ok' },
          { label: 'Reservation validity', value: '14 days', tone: 'warn' },
          { label: 'Linked lot', value: 'Block A / 12', tone: 'ok' },
          { label: 'Status', value: 'Held', tone: 'warn' },
        ],
      },
      {
        id: 'agreements',
        title: 'Sales agreements',
        copy: 'Issue agreements with buyer, plot, and commercial terms already connected.',
        previewRows: [
          { label: 'Agreement draft', value: 'Ready to issue', tone: 'ok' },
          { label: 'Buyer', value: 'N. Fernando', tone: 'muted' },
          { label: 'Sale value', value: 'LKR 4.8M', tone: 'ok' },
          { label: 'Approvals', value: 'Pending legal', tone: 'warn' },
        ],
      },
      {
        id: 'schedules',
        title: 'Installment schedules',
        copy: 'Define payment plans that flow straight into collections.',
        previewRows: [
          { label: 'Installment plan', value: '24 months', tone: 'muted' },
          { label: 'First due', value: '01 Apr 2026', tone: 'ok' },
          { label: 'Monthly amount', value: 'LKR 185,000', tone: 'ok' },
          { label: 'Finance ready', value: 'Yes', tone: 'ok' },
        ],
      },
    ],
  },
  {
    id: 'collections',
    eyebrow: 'Collections that stay on track',
    title: 'Installments & Recovery',
    description:
      'Monitor due dates, overdue balances, and recovery activity on one customer file so finance and sales stop reconciling separate spreadsheets.',
    image: stockImages.features.collections,
    imageAlt: 'Installment collections and recovery',
    details: [
      {
        id: 'schedule-view',
        title: 'Schedule visibility',
        copy: 'Due, paid, and overdue installments stay tied to the buyer account.',
        previewRows: [
          { label: 'Current due', value: 'LKR 85,000', tone: 'warn' },
          { label: 'Last payment', value: '12 Mar 2026', tone: 'ok' },
          { label: 'Overdue balance', value: 'LKR 0', tone: 'ok' },
          { label: 'Next installment', value: '01 Apr 2026', tone: 'muted' },
        ],
      },
      {
        id: 'recovery',
        title: 'Recovery follow-ups',
        copy: 'Coordinate reminders and promise-to-pay without separate trackers.',
        previewRows: [
          { label: 'Promise to pay', value: '18 Mar 2026', tone: 'warn' },
          { label: 'Recovery owner', value: 'Finance desk', tone: 'ok' },
          { label: 'Reminder sent', value: 'Yesterday', tone: 'muted' },
          { label: 'Risk level', value: 'Medium', tone: 'warn' },
        ],
      },
      {
        id: 'customer-file',
        title: 'One customer file',
        copy: 'Sales and finance share the same payment position on every buyer.',
        previewRows: [
          { label: 'Paid to date', value: 'LKR 1.2M', tone: 'ok' },
          { label: 'Outstanding', value: 'LKR 3.6M', tone: 'muted' },
          { label: 'On-time rate', value: '92%', tone: 'ok' },
          { label: 'Open disputes', value: 'None', tone: 'ok' },
        ],
      },
    ],
  },
  {
    id: 'receipts',
    eyebrow: 'Document every payment',
    title: 'Receipt Generation',
    description:
      'Issue professional receipts for advances, installments, and other collections instantly — with buyer, plot, and payment context already filled in.',
    image: stockImages.features.receipts,
    imageAlt: 'Payment receipt generation',
    details: [
      {
        id: 'instant-receipt',
        title: 'One-click receipts',
        copy: 'Generate printable receipts linked to the payment and customer file.',
        previewRows: [
          { label: 'Receipt no.', value: 'RCT-2026-0842', tone: 'ok' },
          { label: 'Payment type', value: 'Installment', tone: 'muted' },
          { label: 'Amount', value: 'LKR 85,000', tone: 'ok' },
          { label: 'Linked lot', value: 'Block A / Lot 12', tone: 'ok' },
        ],
      },
      {
        id: 'payment-context',
        title: 'Payment context filled',
        copy: 'Buyer, plot, and installment reference are pulled in automatically.',
        previewRows: [
          { label: 'Buyer', value: 'N. Fernando', tone: 'ok' },
          { label: 'Installment #', value: '08 of 24', tone: 'muted' },
          { label: 'Method', value: 'Bank transfer', tone: 'ok' },
          { label: 'Issued by', value: 'Cashier desk', tone: 'muted' },
        ],
      },
      {
        id: 'audit-trail',
        title: 'Receipt history',
        copy: 'Keep a searchable trail of issued receipts for audits and customer queries.',
        previewRows: [
          { label: 'Receipts this month', value: '126', tone: 'ok' },
          { label: 'Reprints', value: '3', tone: 'muted' },
          { label: 'Voided', value: '0', tone: 'ok' },
          { label: 'Last issued', value: '10 mins ago', tone: 'ok' },
        ],
      },
    ],
  },
  {
    id: 'projects',
    eyebrow: 'Delivery under control',
    title: 'Projects & Construction Ops',
    description:
      'Plan work, track procurement and site progress, control cost, and bill against certified completion — built for construction teams running live projects.',
    image: stockImages.features.projects,
    imageAlt: 'Construction project operations',
    details: [
      {
        id: 'budget',
        title: 'Budget vs actual',
        copy: 'See spend, variations, and milestone progress before overruns compound.',
        previewRows: [
          { label: 'Active projects', value: '12 sites', tone: 'ok' },
          { label: 'Budget used', value: '68%', tone: 'warn' },
          { label: 'Open POs', value: '9 pending', tone: 'muted' },
          { label: 'Progress bills', value: '3 ready', tone: 'ok' },
        ],
      },
      {
        id: 'procurement',
        title: 'Procurement control',
        copy: 'Keep purchasing tied to project budgets and approved site demand.',
        previewRows: [
          { label: 'Pending approvals', value: '5 POs', tone: 'warn' },
          { label: 'Deliveries due', value: 'Tomorrow', tone: 'ok' },
          { label: 'Budget line', value: 'Materials', tone: 'muted' },
          { label: 'Vendor commits', value: 'LKR 2.1M', tone: 'ok' },
        ],
      },
      {
        id: 'billing',
        title: 'Progress billing',
        copy: 'Raise bills from certified completion with retainage and history attached.',
        previewRows: [
          { label: 'Certified work', value: 'Milestone 3', tone: 'ok' },
          { label: 'Bill amount', value: 'LKR 7.5M', tone: 'ok' },
          { label: 'Retainage', value: '5%', tone: 'muted' },
          { label: 'Client status', value: 'Under review', tone: 'warn' },
        ],
      },
    ],
  },
]
