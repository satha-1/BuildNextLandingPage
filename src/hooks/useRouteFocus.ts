import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useRouteFocus() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = decodeURIComponent(location.hash.slice(1))
    let attempts = 0
    let frame = 0

    // Lazy-loaded pages may not have rendered the target yet.
    const scrollToTarget = () => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (attempts++ < 60) frame = requestAnimationFrame(scrollToTarget)
    }

    scrollToTarget()
    return () => cancelAnimationFrame(frame)
  }, [location.hash, location.key])

  useEffect(() => {
    const main = document.getElementById('main-content')
    if (main) {
      main.focus({ preventScroll: true })
    }
    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [location.pathname])
}
