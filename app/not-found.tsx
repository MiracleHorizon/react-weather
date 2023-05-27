import { redirect } from 'next/navigation'
import type { RedirectType } from 'next/dist/client/components/redirect'

import { Routes } from '@router/Routes'

export default function NotFound() {
  redirect(Routes.HOME, 'replace' as RedirectType)
}
