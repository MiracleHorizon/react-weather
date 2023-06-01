import { Rubik } from 'next/font/google'
import { twJoin } from 'tailwind-merge'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import NavigationMenu from '@components/NavigationMenu'
import { getThemeCookie } from '@lib/cookies/theme'
import '@public/styles/globals.css'

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: 'normal',
  preload: true,
  variable: '--font-rubik'
})

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  }
}

export default function RootLayout({ children }: PropsWithChildren) {
  const { withDarkMode } = getThemeCookie()

  return (
    <html lang='en' className={withDarkMode ? 'dark' : 'light'}>
      <body className={rubik.className}>
        <div
          className={twJoin([
            'relative',
            'flex',
            'min-h-screen',
            'w-screen',
            'items-center',
            'justify-center',
            'bg-gradient-to-r',
            'from-amber-300',
            'to-orange-500',
            'px-[24px]',
            'dark:bg-gradient-to-br',
            'dark:from-slate-600',
            'dark:to-gray-800',
            '[440px-max]:px-[16px]',
            '[550px-max]:pb-[calc(45px+12px+6px)]',
            '[650px-max]:items-start',
            '[650px-max]:py-[24px]'
          ])}
        >
          <main
            className={twJoin([
              'flex',
              'w-[550px]',
              'flex-col',
              'items-start',
              'justify-start',
              'rounded-3xl',
              'bg-white',
              'shadow-md',
              'dark:bg-gray-500'
            ])}
          >
            {children}
            <NavigationMenu />
          </main>
        </div>
      </body>
    </html>
  )
}
