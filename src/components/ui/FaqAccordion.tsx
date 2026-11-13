import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '../../lib/cn'

export function FaqAccordion({
  items,
}: {
  items: readonly { question: string; answer: string }[]
}) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.question ?? null)
  const reduce = useReducedMotion()
  const baseId = useId()

  return (
    <div className="divide-y divide-navy/[0.08] border-y border-navy/[0.08]">
      {items.map((faq, index) => {
        const open = openId === faq.question
        const panelId = `${baseId}-panel-${index}`
        return (
          <div key={faq.question}>
            <button
              type="button"
              className="group flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenId(open ? null : faq.question)}
            >
              <span
                className={cn(
                  'font-display text-base font-bold transition-colors sm:text-lg',
                  open ? 'text-teal' : 'text-navy group-hover:text-teal',
                )}
              >
                {faq.question}
              </span>
              <span
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                  open
                    ? 'rotate-45 border-teal bg-teal text-white'
                    : 'border-navy/15 text-navy group-hover:border-teal group-hover:text-teal',
                )}
              >
                <Plus className="h-4 w-4" aria-hidden />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  key="content"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 pr-12 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                    {faq.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
