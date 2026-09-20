import type { ScreenshotKey } from './screenshots'

export type IndustryProduct = {
  id: 'lands' | 'construction'
  name: string
  tagline: string
  audiences: string[]
  outcomes: string[]
  screenshot: ScreenshotKey
  secondaryScreenshot: ScreenshotKey
}

export const industryProducts: IndustryProduct[] = [
  {
    id: 'lands',
    name: 'BuildNext Lands',
    tagline: 'Land sales ERP & CRM from inquiry to deed transfer.',
    audiences: ['Property Developers', 'Land Selling Companies'],
    outcomes: [
      'Convert inquiries into reservations with full plot and pricing context',
      'Track agreements, installments, and collections on one customer record',
      'Coordinate legal work and deed transfer without leaving the sales file',
    ],
    screenshot: 'leads',
    secondaryScreenshot: 'agreements',
  },
  {
    id: 'construction',
    name: 'BuildNext Construction',
    tagline: 'Project ERP for tenders, procurement, execution, and billing.',
    audiences: ['Construction Companies', 'Property Developers'],
    outcomes: [
      'Move from tender award to project setup with controlled budgets',
      'Procure materials and track site execution against milestones',
      'Bill clients and close projects with documented handover',
    ],
    screenshot: 'construction-projects',
    secondaryScreenshot: 'construction-billing',
  },
]
