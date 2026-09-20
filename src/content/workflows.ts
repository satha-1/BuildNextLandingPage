import type { ScreenshotKey } from './screenshots'

export type WorkflowStep = {
  id: string
  label: string
  title: string
  copy: string
  screenshot: ScreenshotKey
}

export const landsWorkflow: WorkflowStep[] = [
  {
    id: 'inquiry',
    label: 'Inquiry',
    title: 'Capture every lead with project context',
    copy: 'Record inquiries against projects and plots. Assign ownership, track source, and keep follow-up history on the same record.',
    screenshot: 'leads',
  },
  {
    id: 'follow-up',
    label: 'Follow Up',
    title: 'Schedule and track sales activity',
    copy: 'Sales teams see what is due today, who owns each lead, and what was promised on the last contact.',
    screenshot: 'leads',
  },
  {
    id: 'site-visit',
    label: 'Site Visit',
    title: 'Confirm interest with visit outcomes',
    copy: 'Log site visits, shortlist plots, and move qualified buyers toward reservation with verified availability.',
    screenshot: 'projects',
  },
  {
    id: 'reservation',
    label: 'Reservation',
    title: 'Hold inventory against verified advance',
    copy: 'Reserve plots when payment criteria are met. Inventory status stays connected to the customer file.',
    screenshot: 'projects',
  },
  {
    id: 'agreement',
    label: 'Agreement',
    title: 'Issue and track sales agreements',
    copy: 'Generate agreements with installment schedules, approvals, and status segments your finance team can act on.',
    screenshot: 'agreements',
  },
  {
    id: 'installments',
    label: 'Installments',
    title: 'Collect and reconcile payments',
    copy: 'Match receipts to installments, manage reminders, and surface overdue accounts for recovery.',
    screenshot: 'payments',
  },
  {
    id: 'deed-transfer',
    label: 'Deed Transfer',
    title: 'Complete legal and title work',
    copy: 'Progress deed stages, coordinate documentation, and keep buyers informed through completion.',
    screenshot: 'deeds',
  },
]

export const constructionWorkflow: WorkflowStep[] = [
  {
    id: 'tender',
    label: 'Tender',
    title: 'Evaluate and award work',
    copy: 'Track tender submissions, revisions, and award decisions with commercial context ready for project setup.',
    screenshot: 'construction-tender',
  },
  {
    id: 'project-setup',
    label: 'Project Setup',
    title: 'Define scope, budget, and milestones',
    copy: 'Set up projects with cost heads, timelines, and team assignments before procurement begins.',
    screenshot: 'construction-projects',
  },
  {
    id: 'procurement',
    label: 'Procurement',
    title: 'Source materials and subcontractors',
    copy: 'Raise purchase requests, compare quotes, and issue orders tied to project budgets.',
    screenshot: 'construction-procurement',
  },
  {
    id: 'execution',
    label: 'Execution',
    title: 'Run site operations daily',
    copy: 'Track progress, labour, material consumption, and site issues against planned milestones.',
    screenshot: 'construction-execution',
  },
  {
    id: 'billing',
    label: 'Billing',
    title: 'Invoice based on certified work',
    copy: 'Generate progress bills, retainage, and variations with finance-ready documentation.',
    screenshot: 'construction-billing',
  },
  {
    id: 'handover',
    label: 'Handover',
    title: 'Close projects with sign-off',
    copy: 'Document completion, final accounts, and handover checklists before project closure.',
    screenshot: 'construction-handover',
  },
]
