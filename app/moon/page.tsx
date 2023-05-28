import type { Metadata } from 'next'

import { writePageTitle } from '@helpers/writePageTitle'

export const metadata: Metadata = {
  title: writePageTitle('Moon')
}

export default function MoonPage() {
  return <div>Moon</div>
}
