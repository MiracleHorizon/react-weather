import { Rubik } from 'next/font/google'
import type { Metadata } from 'next'

import { useSelectTheme } from '@hooks/useSelectTheme'
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  }
}

export default function RootLayout({ children }: ChildrenProps) {
  const { withDarkMode } = useSelectTheme()

  return (
    <html lang='en' className={withDarkMode ? 'dark' : 'light'}>
      <body className={`${rubik.className} relative`}>
        <div className='relative flex h-screen w-screen items-center justify-center bg-[#fdfdff] px-[24px] dark:bg-gray-700 [440px-max]:px-[16px] [650px-max]:items-start [650px-max]:pt-[24px]'>
          {children}
        </div>
      </body>
    </html>
  )
}
