export type LifecycleStage = {
  id: string
  number: string
  title: string
  summary: string
  detail: string
}

export const lifecycleStages: LifecycleStage[] = [
  {
    id: 'capture',
    number: '01',
    title: 'Capture',
    summary: 'Register leads, import campaign lists, track sources, and collect inquiries through QR-enabled digital cards.',
    detail:
      'Sales teams record inquiries from campaigns, site boards, and digital cards in a shared lead pipeline instead of personal spreadsheets.',
  },
  {
    id: 'engage',
    number: '02',
    title: 'Engage',
    summary: 'Assign leads, schedule follow-ups, record calls, and manage property visits.',
    detail:
      'Follow-up schedules and site visits stay on the same buyer record, so assignment, activity, and visit status remain visible across the team.',
  },
  {
    id: 'convert',
    number: '03',
    title: 'Convert',
    summary: 'Prepare quotations, apply controlled discounts, approve advances, and reserve plots.',
    detail:
      'Quotations, discount approvals, and verified advances sit in one conversion path so plot reservation follows confirmed collection, not informal holds.',
  },
  {
    id: 'collect',
    number: '04',
    title: 'Collect',
    summary: 'Design installment plans, verify payments, issue receipts, send reminders, and manage recovery.',
    detail:
      'Installment schedules, payment approval, receipts, and recovery portfolios share the same agreement record from first installment to arrears follow-up.',
  },
  {
    id: 'reward',
    number: '05',
    title: 'Reward',
    summary: 'Govern internal sales commissions and partner earnings through controlled approval workflows.',
    detail:
      'Internal commission requests and channel-partner payouts move through rate configuration, eligibility checks, and approval before withdrawal.',
  },
  {
    id: 'complete',
    number: '06',
    title: 'Complete',
    summary: 'Coordinate legal work, progress deed stages, and provide buyers with online deed visibility.',
    detail:
      'Legal officers progress deed stages while buyers can follow title processing through portal views and tracking links tied to the same file.',
  },
]

export const heroPathStages = [
  'Inquiry',
  'Site Visit',
  'Reservation',
  'Agreement',
  'Collection',
  'Deed',
] as const
