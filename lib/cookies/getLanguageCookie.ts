import { cookies } from 'next/headers'

import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'
import { Language } from '@models/Language'

export function getLanguageCookie(): Result {
  const cookieStore = cookies()
  const serverCookieExtractor = new ServerCookieExtractor(cookieStore)
  const languageCookie = serverCookieExtractor.extractLanguage()

  if (!languageCookie) {
    return {
      languageCookie: Language.EN
    }
  }

  return { languageCookie }
}

interface Result {
  languageCookie: Language
}
