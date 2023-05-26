import { cookies } from 'next/headers'

import { Theme } from '@app-types/Theme'
import { THEME_COOKIE_NAME } from '@constants/cookie'
import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'

export function getThemeCookie(): Result {
  const cookieStore = cookies()
  const serverCookieExtractor = new ServerCookieExtractor(cookieStore)
  const themeCookie = serverCookieExtractor.extractTheme()

  if (!themeCookie) {
    cookieStore.set(THEME_COOKIE_NAME, Theme.DARK)

    return {
      themeCookie: Theme.DARK,
      withDarkMode: true
    }
  }

  return {
    themeCookie,
    withDarkMode: themeCookie === Theme.DARK
  }
}

interface Result {
  themeCookie: Theme
  withDarkMode: boolean
}
