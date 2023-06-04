import type { Metadata } from 'next'

import SoonBanner from '@ui/SoonBanner'
import { writePageTitle } from '@helpers/writePageTitle'

export const metadata: Metadata = {
  title: writePageTitle('Moon')
}

export default function MoonPage() {
  return (
    <div className='h-[150px] w-full'>
      <SoonBanner />
    </div>
  )
}
