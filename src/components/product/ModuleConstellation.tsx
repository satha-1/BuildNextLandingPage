import { useEffect, useMemo, useState } from 'react'
import { moduleGroups, productModules, type ProductModule } from '../../content/modules'
import { cn } from '../../lib/cn'

export function ModuleConstellation({
  roleFilter,
}: {
  roleFilter?: ProductModule['roles'][number]
}) {
  const visible = useMemo(
    () =>
      roleFilter
        ? productModules.filter((m) => m.roles.includes(roleFilter))
        : productModules,
    [roleFilter],
  )
  const [activeId, setActiveId] = useState(visible[0]?.id ?? productModules[0].id)

  useEffect(() => {
    if (!visible.some((item) => item.id === activeId)) {
      setActiveId(visible[0]?.id ?? productModules[0].id)
    }
  }, [visible, activeId])

  const active = productModules.find((m) => m.id === activeId) ?? productModules[0]

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8">
        {moduleGroups.map((group) => {
          const items = visible.filter((m) => m.group === group)
          if (!items.length) return null
          return (
            <div key={group}>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-teal">{group}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((mod) => {
                  const selected = mod.id === activeId
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => setActiveId(mod.id)}
                      className={cn(
                        'rounded-full border px-3 py-1.5 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal',
                        selected
                          ? 'border-navy bg-navy text-offwhite'
                          : 'border-navy/15 bg-white text-navy hover:border-teal',
                      )}
                    >
                      {mod.name}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <aside className="rounded-2xl border border-navy/10 bg-offwhite p-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal">{active.group}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-navy">{active.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-navy/70">{active.description}</p>
        <ul className="mt-5 space-y-2">
          {active.capabilities.map((cap) => (
            <li key={cap} className="border-t border-navy/10 pt-2 text-sm text-navy">
              {cap}
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}
