import type { ReactNode } from 'react'

import type { Routes } from '@router/Routes'

export interface NavigationCategory {
  title: string
  href: Routes
  icon: ReactNode
}
