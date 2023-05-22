import { cookies } from 'next/headers'

import { Theme } from '@app-types/Theme'
import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'

export function useTheme() {
  const serverCookieExtractor = new ServerCookieExtractor(cookies())
  const theme = serverCookieExtractor.extractTheme()
  const withDarkMode = (theme && theme === Theme.DARK) ?? false

  return { theme, withDarkMode }
}
