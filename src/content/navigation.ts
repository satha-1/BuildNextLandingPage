export const productLinks = [
  { to: '/lands', label: 'BuildNext Lands', description: 'Land sales ERP & CRM' },
  { to: '/construction', label: 'BuildNext Construction', description: 'Construction ERP & CRM' },
] as const

export const navLinks = [
  { to: '/', label: 'Home', end: true },
  { label: 'Products', children: productLinks },
  { to: '/services', label: 'Services' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
] as const

export const footerNav = [
  { to: '/', label: 'Home' },
  { to: '/lands', label: 'BuildNext Lands' },
  { to: '/construction', label: 'BuildNext Construction' },
  { to: '/services', label: 'Services' },
  { to: '/news', label: 'News' },
  { to: '/contact', label: 'Contact' },
  { to: '/book-demo', label: 'Book a Demo' },
] as const
