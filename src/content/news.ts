export type NewsBlock =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'pull'; text: string }
  | { type: 'points'; items: string[] }

export type NewsArticle = {
  slug: string
  kicker: string
  title: string
  dek: string
  date: string
  dateIso: string
  readTime: string
  blocks: NewsBlock[]
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'ai-construction-vendor-marketplace',
    kicker: 'Now in build',
    title: 'A vendor marketplace that starts from the bill of quantities',
    dek: 'BuildNext is building an AI construction marketplace where project documents become quantities, and those quantities meet vendors who can actually quote them.',
    date: '14 Oct 2026',
    dateIso: '2026-10-14',
    readTime: '4 min read',
    blocks: [
      {
        type: 'p',
        text: 'Most construction buying still begins in a group chat. A site needs cement, steel, or formwork. Someone forwards a spreadsheet. Three vendors reply with prices that cannot be compared. The budget finds out later.',
      },
      {
        type: 'pull',
        text: 'The marketplace starts from demand the project already has — not from a directory of business cards.',
      },
      {
        type: 'h',
        text: 'From the drawing to a list the yard can price',
      },
      {
        type: 'p',
        text: 'The product in build reads project documents, turns them into a bill of quantities, and flags lines that still need a human eye. Quantities and costs stay attached to the project, so an estimate is something a team can correct — not a number that appears from nowhere.',
      },
      {
        type: 'points',
        items: [
          'Upload drawings and sheets, then review the quantities before anyone is asked to quote',
          'Keep uncertainty visible, so a flagged line is corrected instead of buried',
          'Publish a vendor catalog the project can match against, by what is needed and by what it means',
        ],
      },
      {
        type: 'h',
        text: 'Vendors with a catalog, buyers with an RFQ',
      },
      {
        type: 'p',
        text: 'Once demand is clear, the marketplace matches it to vendors and opens a request for quotation. Vendors answer in the same structure. The team compares, selects, and keeps the decision on the project — next to the budget it has to live inside.',
      },
      {
        type: 'p',
        text: 'It is the buying desk BuildNext Construction has been missing: procurement that knows the site, and a yard that knows the bill.',
      },
    ],
  },
  {
    slug: 'crm-ai-agent',
    kicker: 'On the customer file',
    title: 'A CRM agent that remembers the callback, the plot, and the installment',
    dek: 'The agent sits on the same record as the sale, so the next action is a sentence a person can send — not another system to open.',
    date: '2 Oct 2026',
    dateIso: '2026-10-02',
    readTime: '3 min read',
    blocks: [
      {
        type: 'p',
        text: 'A good salesperson already knows the follow-up is due. The problem is everything around it: which lot is still free, what was promised, which installment is next, and who last spoke to the buyer. That context usually lives in three places and one memory.',
      },
      {
        type: 'pull',
        text: 'The agent does not replace the desk. It arrives at the call already holding the file.',
      },
      {
        type: 'h',
        text: 'One question, the whole position',
      },
      {
        type: 'p',
        text: 'Ask what is due on a lot and the agent answers from the customer file: reservation, agreement, installment, and the next action already on the pipeline. Ask what is available and it answers from inventory, not from a colleague’s last message.',
      },
      {
        type: 'points',
        items: [
          'Buyer questions on availability, payment position, and what happens next',
          'Internal help for the sales desk: who owns the lead, when to call, which stage it sits in',
          'Drafted next steps a person still sends — the agent prepares, the team decides',
        ],
      },
      {
        type: 'h',
        text: 'Built beside the chatbot you can already add',
      },
      {
        type: 'p',
        text: 'BuildNext360 already offers a chatbot for customers and teams. The CRM agent is that idea grown up: less of a window in the corner, more of a colleague who has read the file. It is scoped with Lands or Construction, and it stays inside the record finance and sales already share.',
      },
    ],
  },
  {
    slug: 'bn360-intelligence',
    kicker: 'The intelligence layer',
    title: 'BN360 Intelligence, the brief before the Monday meeting',
    dek: 'Pipeline, plot status, collections, and site cost, read together — so leadership sees what moves next without reconciling four workbooks.',
    date: '18 Sep 2026',
    dateIso: '2026-09-18',
    readTime: '4 min read',
    blocks: [
      {
        type: 'p',
        text: 'A property and construction business does not fail for lack of reports. It stalls because the reports refuse to talk. Sales has a pipeline. Inventory has a map. Finance has a collection sheet. The site has a budget. Monday is the meeting where someone tries to staple them together.',
      },
      {
        type: 'pull',
        text: 'Intelligence here is not a new dashboard for its own sake. It is the layer that notices what the separate books cannot.',
      },
      {
        type: 'h',
        text: 'What it watches',
      },
      {
        type: 'p',
        text: 'BN360 Intelligence reads the operational record BuildNext360 already keeps: inquiries and ownership, lots that are free or held, installments that are due, and project spend against what was approved. The brief is short on purpose. What is moving. What is late. What should not be promised.',
      },
      {
        type: 'points',
        items: [
          'A morning view of pipeline, open inventory, and collection position',
          'Early notice when site spend and certified progress start to diverge',
          'The same numbers sales and finance already share — interpreted, not re-keyed',
        ],
      },
      {
        type: 'h',
        text: 'For people who run live projects',
      },
      {
        type: 'p',
        text: 'Land desks use it to see which inquiries deserve a visit. Developers use it to see whether a reserved lot and a late installment are the same problem. Construction leads use it to see procurement before the budget does. One intelligence layer, spoken in the language of the industry you already operate.',
      },
    ],
  },
]

export function getNewsArticle(slug: string | undefined) {
  return newsArticles.find((article) => article.slug === slug)
}
