import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useRouteFocus() {
  const location = useLocation()

  useEffect(() => {
    const main = document.getElementById('main-content')
    if (main) {
      main.focus({ preventScroll: true })
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])
}
