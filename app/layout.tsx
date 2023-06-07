import { Rubik } from 'next/font/google'
import { twJoin } from 'tailwind-merge'
import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import NavigationMenu from '@components/NavigationMenu'
import { getThemeCookie } from '@lib/cookies/getThemeCookie'
import '@public/styles/globals.css'

const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: 'normal',
  preload: true
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
      <body
        className={twJoin([
          rubik.className,
          'bg-gradient-to-r',
          'from-amber-300',
          'to-orange-500',
          'dark:bg-gradient-to-br',
          'dark:from-slate-900',
          'dark:to-gray-800'
        ])}
      >
        <div
          className={twJoin([
            'relative',
            'flex',
            'min-w-[300px]',
            'w-screen',
            'items-start',
            'justify-center',
            'px-[24px]',
            'pt-[84px]',
            'pb-[80px]',
            '[440px-max]:px-[16px]',
            '[550px-max]:pb-[calc(45px+12px+6px)]',
            '[550px-max]:pt-[74px]',
            '[650px-max]:items-start',
            '[650px-max]:pb-[24px]'
          ])}
        >
          <NavigationMenu />
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
              'dark:bg-slate-700'
            ])}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
