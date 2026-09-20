export type ModuleGroup = 'Grow' | 'Sell' | 'Collect' | 'Complete' | 'Control'

export type ProductModule = {
  id: string
  name: string
  group: ModuleGroup
  description: string
  capabilities: string[]
  roles: Array<'Sales' | 'Finance' | 'Recovery' | 'Legal' | 'Management' | 'Customer Experience'>
}

export const productModules: ProductModule[] = [
  {
    id: 'lead-management',
    name: 'Lead Management',
    group: 'Grow',
    description: 'Capture and qualify land inquiries in a shared pipeline instead of personal lists.',
    capabilities: [
      'Lead pipeline with assigned and unassigned views',
      'Campaign source tracking',
      'QR-enabled digital inquiry cards',
      'SMS campaigns to client lists',
    ],
    roles: ['Sales', 'Management'],
  },
  {
    id: 'customer-management',
    name: 'Customer Management',
    group: 'Grow',
    description: 'Keep buyer identity, contact history, and account records in one registry.',
    capabilities: [
      'Customer registry and buyer accounts',
      'Call and follow-up history on the buyer record',
      'Customer SMS history',
      'Buyer-facing account context for collections and legal work',
    ],
    roles: ['Sales', 'Finance', 'Customer Experience'],
  },
  {
    id: 'land-inventory',
    name: 'Land Inventory',
    group: 'Sell',
    description: 'Manage land projects, site records, and project cost context for sales teams.',
    capabilities: [
      'Land project and site records',
      'Project cost registers',
      'Cost forecasting views',
      'Site assignment to sales teams',
    ],
    roles: ['Sales', 'Management'],
  },
  {
    id: 'plot-management',
    name: 'Plot Management',
    group: 'Sell',
    description: 'Track plot availability, lot status, and inventory changes as sales activity proceeds.',
    capabilities: [
      'Plot and lot inventory by project',
      'Lot status across available, reserved, and sold',
      'Lot details used in quotations and agreements',
      'Inventory updates tied to reservation activity',
    ],
    roles: ['Sales', 'Management'],
  },
  {
    id: 'reservation-management',
    name: 'Reservation Management',
    group: 'Sell',
    description: 'Hold plots against verified advances rather than informal verbal reservations.',
    capabilities: [
      'Advance and reservation payment recording',
      'Plot reservation after verified advance',
      'Pending and waiting quotation stages',
      'Reservation validity and next-due context on receipts',
    ],
    roles: ['Sales', 'Finance'],
  },
  {
    id: 'sales-management',
    name: 'Sales Management',
    group: 'Sell',
    description: 'Move quotations into agreements with controlled discount and team workflows.',
    capabilities: [
      'Sales quotations and agreement records',
      'Controlled discount requests and approvals',
      'Sales team and site assignment',
      'Resell request handling',
    ],
    roles: ['Sales', 'Management'],
  },
  {
    id: 'payment-management',
    name: 'Payment Management',
    group: 'Collect',
    description: 'Record, approve, and document buyer payments against the correct agreement.',
    capabilities: [
      'Payment ledger with approval workflow',
      'Uploaded and system-generated receipts',
      'Payment history reports per agreement',
      'Voided payment handling for audit',
    ],
    roles: ['Finance', 'Management'],
  },
  {
    id: 'installment-management',
    name: 'Installment Management',
    group: 'Collect',
    description: 'Structure installment plans and track what is due against each agreement.',
    capabilities: [
      'Installment plan design on agreements',
      'Advance, down payment, and regular installment types',
      'Next-due dates on receipts and collections views',
      'Balance and arrears context on payment documents',
    ],
    roles: ['Finance', 'Sales', 'Recovery'],
  },
  {
    id: 'commission-management',
    name: 'Commission Management',
    group: 'Collect',
    description: 'Govern internal sales commissions and channel-partner earnings through approvals.',
    capabilities: [
      'Internal commission requests and approvals',
      'Partner commission rates and eligibility',
      'Withdrawal and payout request control',
      'Commission request registers for finance',
    ],
    roles: ['Finance', 'Sales', 'Management'],
  },
  {
    id: 'legal-documentation',
    name: 'Legal & Documentation',
    group: 'Complete',
    description: 'Coordinate legal files, deed stages, and document hand-off from the same buyer record.',
    capabilities: [
      'Legal agreement worklists',
      'Deed stage tracking',
      'Deed draft communication from quotations',
      'Document progress visible beyond the sales team',
    ],
    roles: ['Legal', 'Management', 'Customer Experience'],
  },
  {
    id: 'finance',
    name: 'Finance',
    group: 'Control',
    description: 'Give finance officers a controlled ledger for collections, expenses, and approvals.',
    capabilities: [
      'Payment approval and receipt issuance',
      'Expense claims',
      'Financial operations dashboards',
      'Manual accounting follow-ups',
    ],
    roles: ['Finance', 'Management'],
  },
  {
    id: 'workflow-approvals',
    name: 'Workflow & Approvals',
    group: 'Control',
    description: 'Keep discount, payment, and commission activity behind role-based approval steps.',
    capabilities: [
      'Discount approval queues',
      'Payment approval before receipt generation',
      'Commission and payout approvals',
      'Configurable workflow automation settings',
    ],
    roles: ['Management', 'Finance'],
  },
  {
    id: 'reporting-analytics',
    name: 'Reporting & Analytics',
    group: 'Control',
    description: 'Give managers operational reporting across pipeline, inventory, and collections.',
    capabilities: [
      'Operations and pipeline overview dashboards',
      'Sales pipeline reporting',
      'Team and sales-manager performance views',
      'Collection and recovery oversight',
    ],
    roles: ['Management', 'Sales', 'Finance', 'Recovery'],
  },
  {
    id: 'user-management',
    name: 'User Management',
    group: 'Control',
    description: 'Assign people to roles, teams, and branches with permission-aware access.',
    capabilities: [
      'User administration',
      'Role-based access control',
      'Team and branch-aware structure',
      'Two-factor authentication',
    ],
    roles: ['Management'],
  },
  {
    id: 'notifications',
    name: 'Notifications',
    group: 'Control',
    description: 'Surface operational alerts to staff without moving work into private inboxes.',
    capabilities: [
      'CRM alerts',
      'Staff notification bell',
      'Collection and quotation follow-up signals',
      'Configurable automation notices',
    ],
    roles: ['Sales', 'Recovery', 'Management'],
  },
  {
    id: 'customer-portal',
    name: 'Customer Portal',
    group: 'Complete',
    description: 'Give buyers a controlled view of deed and title-processing progress.',
    capabilities: [
      'Online deed visibility for buyers',
      'Secure portal experiences',
      'Public tracking links for deed progress',
      'Buyer-facing status without exposing internal ledgers',
    ],
    roles: ['Customer Experience', 'Legal'],
  },
  {
    id: 'agent-partner',
    name: 'Agent & Partner Management',
    group: 'Grow',
    description: 'Register channel partners and control how referral earnings are calculated and paid.',
    capabilities: [
      'Referral partner records',
      'Partner commission rate configuration',
      'Partner commission registers',
      'Partner payout invoices and payment requests',
    ],
    roles: ['Sales', 'Finance', 'Management'],
  },
  {
    id: 'system-administration',
    name: 'System Administration',
    group: 'Control',
    description: 'Operate a dedicated company environment with auditability and configuration control.',
    capabilities: [
      'Company and branch-aware configuration',
      'Operational audit trails',
      'ERP settings and workflow automation',
      'Dedicated customer deployment model',
    ],
    roles: ['Management'],
  },
]

export const moduleGroups: ModuleGroup[] = ['Grow', 'Sell', 'Collect', 'Complete', 'Control']
