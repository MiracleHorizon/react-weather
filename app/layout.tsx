import { Rubik } from 'next/font/google'
import { cookies } from 'next/headers'
import type { Metadata } from 'next'

import Navigation from '@components/Navigation'
import { APP_NAME } from '@constants/app'
import { Theme } from '@app-types/Theme'
import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'
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
  // <meta
  //   content="width=device-width, initial-scale=1"
  //   name="viewport"
  // />
}

export default function RootLayout({ children }: ChildrenProps) {
  const serverCookieExtractor = new ServerCookieExtractor(cookies())
  const themeCookie = serverCookieExtractor.extractTheme()
  const withDarkMode = themeCookie && themeCookie === Theme.DARK

  return (
    <html lang='en' className={withDarkMode ? 'dark' : 'light'}>
      <body className={rubik.className}>
        <div className='flex h-screen w-screen flex-col items-start bg-gray-100 dark:bg-gray-700'>
          <aside>
            <Navigation />
          </aside>
          {children}
        </div>
      </body>
    </html>
  )
}
