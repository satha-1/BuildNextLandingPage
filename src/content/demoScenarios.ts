export type DemoScenario = {
  id: string
  title: string
  chapter: string
  screenshot: string
  context: string
  steps: string[]
  role: 'Sales' | 'Finance' | 'Recovery' | 'Legal' | 'Management'
}

export const demoScenarios: DemoScenario[] = [
  {
    id: 'lead-to-reservation',
    title: 'Convert a lead into a reservation',
    chapter: '01 Capture to hold',
    screenshot: '/screenshots/leads.webp',
    context:
      'A sales executive registers an inquiry, schedules a site visit, prepares a quotation, and records a verified advance so the plot moves from available to reserved.',
    steps: [
      'Create or assign the lead in the pipeline',
      'Log follow-up activity and schedule a property visit',
      'Issue a quotation against selected lots',
      'Record an approved advance so inventory reflects the reservation',
    ],
    role: 'Sales',
  },
  {
    id: 'agreement-plan',
    title: 'Create an agreement and installment plan',
    chapter: '02 Convert',
    screenshot: '/screenshots/agreements.webp',
    context:
      'Once reservation terms are accepted, the agreement carries lot details, payment type, and the installment schedule that finance and recovery will later collect against.',
    steps: [
      'Open the quotation and complete agreement terms',
      'Set payment type: full, plan, or custom schedule',
      'Define advance, down payment, and installment dates',
      'Keep discount amounts on the controlled approval path',
    ],
    role: 'Sales',
  },
  {
    id: 'record-payment',
    title: 'Record and approve a buyer payment',
    chapter: '03 Collect',
    screenshot: '/screenshots/payments.webp',
    context:
      'Finance records a payment against the agreement, submits it for approval, and issues a receipt once the amount is verified.',
    steps: [
      'Select the agreement and installment being paid',
      'Enter amount, method, and reference',
      'Send the payment through approval',
      'Download the generated receipt after approval',
    ],
    role: 'Finance',
  },
  {
    id: 'overdue-account',
    title: 'Manage an overdue account',
    chapter: '04 Recover',
    screenshot: '/screenshots/recovery.webp',
    context:
      'Recovery officers work from agreement-level arrears, contact history, and promise-to-pay notes rather than a separate spreadsheet of overdue names.',
    steps: [
      'Open the recovery portfolio for overdue agreements',
      'Review installment arrears and last payment',
      'Record contact activity on the quotation or agreement',
      'Track the next promised payment date',
    ],
    role: 'Recovery',
  },
  {
    id: 'commission-eligibility',
    title: 'Process commission eligibility',
    chapter: '05 Reward',
    screenshot: '/screenshots/dashboard.webp',
    context:
      'Internal sales and partner commissions are requested against configured rates, then approved before any payout or withdrawal is processed.',
    steps: [
      'Confirm the sale and payment conditions used for eligibility',
      'Submit an internal or partner commission request',
      'Review rates and approval status',
      'Process withdrawal or payout only after approval',
    ],
    role: 'Finance',
  },
  {
    id: 'deed-stages',
    title: 'Track a deed through legal stages',
    chapter: '06 Complete',
    screenshot: '/screenshots/deeds.webp',
    context:
      'Legal officers move the file through deed stages while buyers can follow progress through portal views and tracking links tied to the same record.',
    steps: [
      'Open the legal or deed worklist for the agreement',
      'Advance the documented deed stage',
      'Share deed-draft communication where the workflow requires it',
      'Let the buyer inspect status through portal or tracking access',
    ],
    role: 'Legal',
  },
]
