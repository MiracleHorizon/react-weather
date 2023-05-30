import { cookies } from 'next/headers'

import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'

export function getCityCookie(): Result {
  const cookieStore = cookies()
  const serverCookieExtractor = new ServerCookieExtractor(cookieStore)
  const cityCookie = serverCookieExtractor.extractCity()

  return { cityCookie }
}

interface Result {
  cityCookie: string | null
}
