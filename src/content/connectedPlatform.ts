export type PlatformNode = {
  id: string
  label: string
  description: string
  connectsTo: string[]
}

export const platformNodes: PlatformNode[] = [
  {
    id: 'sales',
    label: 'Sales',
    description: 'Leads, customers, reservations, and pipeline activity',
    connectsTo: ['finance', 'projects', 'legal'],
  },
  {
    id: 'finance',
    label: 'Finance',
    description: 'Collections, installments, commissions, and billing',
    connectsTo: ['sales', 'management'],
  },
  {
    id: 'projects',
    label: 'Projects',
    description: 'Land inventory, construction sites, and milestones',
    connectsTo: ['sales', 'inventory', 'legal'],
  },
  {
    id: 'legal',
    label: 'Legal',
    description: 'Agreements, documentation, and deed processing',
    connectsTo: ['sales', 'projects'],
  },
  {
    id: 'inventory',
    label: 'Inventory',
    description: 'Plots, materials, stock movement, and availability',
    connectsTo: ['projects', 'finance'],
  },
  {
    id: 'management',
    label: 'Management',
    description: 'Dashboards, approvals, audit trails, and reporting',
    connectsTo: ['sales', 'finance', 'projects'],
  },
]
