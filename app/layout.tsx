import { Rubik } from 'next/font/google'
import type { Metadata } from 'next'

import Navigation from '@components/Navigation'
import Greeting from '@components/Greeting'
import { APP_NAME } from '@constants/app'
import { useTheme } from '@hooks/useTheme'
import { useClientLocation } from '@hooks/useClientLocation'
import type { ChildrenProps } from '@app-types/ChildrenProps'
import '@public/styles/globals.css'

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: 'normal',
  preload: true,
  variable: '--font-rubik'
})

export const metadata: Metadata = {
  title: APP_NAME
}

export default function RootLayout({ children }: ChildrenProps) {
  const { withDarkMode } = useTheme()
  const { location } = useClientLocation()

  return (
    <html lang='en' className={withDarkMode ? 'dark' : 'light'}>
      <body className={rubik.className}>
        <div className='relative flex h-screen w-screen items-center justify-center bg-gray-100 px-[24px] dark:bg-gray-700'>
          <aside className='absolute left-0 top-0'>
            <Navigation />
          </aside>
          <main className='flex max-h-[400px] w-[600px] flex-col items-center justify-start rounded-[24px] bg-gray-300 py-[24px] dark:bg-gray-600'>
            {location ? (
              children
            ) : (
              <Greeting title='Hello! Please, enter city' />
            )}
          </main>
        </div>
      </body>
    </html>
  )
}
