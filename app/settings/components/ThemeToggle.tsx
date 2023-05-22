import { useMemo } from 'react'
import { cookies } from 'next/headers'

import Toggle from '@ui/Toggle'
import { Theme } from '@app-types/Theme'
import { THEME_COOKIE_NAME } from '@constants/cookie'
import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'

export default function ThemeToggle() {
  const serverCookieExtractor = useMemo(() => {
    return new ServerCookieExtractor(cookies())
  }, [])
  const themeCookie = serverCookieExtractor.extractTheme()
  const isDarkTheme = (themeCookie && themeCookie === Theme.DARK) ?? true

  async function setDarkTheme() {
    'use server'
    await cookies().set({
      name: THEME_COOKIE_NAME,
      value: Theme.DARK
    })
  }

  async function setLightTheme() {
    'use server'
    await cookies().set({
      name: THEME_COOKIE_NAME,
      value: Theme.LIGHT
    })
  }

  return (
    <div className='flex w-full min-w-max items-center'>
      <Toggle
        isActive={isDarkTheme}
        activate={setDarkTheme}
        deactivate={setLightTheme}
      />
      <span className='ml-[12px] text-[20px] font-light text-gray-700 dark:text-gray-100'>
        Toggle dark theme
      </span>
    </div>
  )
}
