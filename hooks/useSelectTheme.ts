import { cookies } from 'next/headers'

import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'
import { THEME_COOKIE_NAME } from '@constants/cookie'
import { Theme } from '@app-types/Theme'

export function useSelectTheme() {
  const serverCookieExtractor = new ServerCookieExtractor(cookies())
  const theme = serverCookieExtractor.extractTheme()
  const withDarkMode = (theme && theme === Theme.DARK) || false

  if (!theme) {
    cookies().set({
      name: THEME_COOKIE_NAME,
      value: Theme.DARK
    })

    return {
      theme: Theme.DARK,
      withDarkMode: true
    }
  }

  return { theme, withDarkMode }
}
