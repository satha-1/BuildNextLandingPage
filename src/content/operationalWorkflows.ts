import type { ScreenshotKey } from './screenshots'

export type OperationalWorkflow = {
  id: string
  product: 'BuildNext Lands' | 'BuildNext Construction'
  title: string
  steps: string[]
  screenshot: ScreenshotKey
}

export const operationalWorkflows: OperationalWorkflow[] = [
  {
    id: 'lead-to-reservation',
    product: 'BuildNext Lands',
    title: 'Lead to reservation',
    steps: ['Inquiry captured', 'Follow-up scheduled', 'Site visit logged', 'Plot reserved'],
    screenshot: 'leads',
  },
  {
    id: 'agreement-to-collection',
    product: 'BuildNext Lands',
    title: 'Agreement to collection',
    steps: ['Agreement issued', 'Installment due', 'Payment received', 'Receipt approved'],
    screenshot: 'payments',
  },
  {
    id: 'overdue-to-recovery',
    product: 'BuildNext Lands',
    title: 'Overdue to recovery',
    steps: ['Schedule breached', 'Recovery assigned', 'Contact logged', 'Promise tracked'],
    screenshot: 'recovery',
  },
  {
    id: 'tender-to-site',
    product: 'BuildNext Construction',
    title: 'Tender to site mobilization',
    steps: ['Tender awarded', 'Budget approved', 'Procurement started', 'Site mobilized'],
    screenshot: 'construction-projects',
  },
  {
    id: 'site-to-bill',
    product: 'BuildNext Construction',
    title: 'Site progress to billing',
    steps: ['Work certified', 'Variation reviewed', 'Progress bill raised', 'Payment collected'],
    screenshot: 'construction-billing',
  },
]
