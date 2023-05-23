import type { Metadata } from 'next'

import Settings from './components'
import { APP_NAME } from '@constants/app'

export const metadata: Metadata = {
  title: `${APP_NAME} | Settings`
}

export default function SettingsPage() {
  return <Settings />
}
