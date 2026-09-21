/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string
  readonly VITE_DEMO_APP_URL?: string
  readonly VITE_DEMO_API_URL?: string
  readonly VITE_CONTACT_EMAIL?: string
  readonly VITE_CONTACT_PHONE?: string
  readonly VITE_CONTACT_WHATSAPP?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
