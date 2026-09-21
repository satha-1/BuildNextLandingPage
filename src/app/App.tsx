import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { AppRoutes } from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Analytics />
    </BrowserRouter>
  )
}
