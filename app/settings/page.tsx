import type { Metadata } from 'next'

import Settings from './components'
import { writePageTitle } from '@helpers/writePageTitle'

export const metadata: Metadata = {
  title: writePageTitle('Settings')
}

export default function SettingsPage() {
  return <Settings />
}
