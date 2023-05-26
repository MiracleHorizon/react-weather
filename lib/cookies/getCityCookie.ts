import { cookies } from 'next/headers'

import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'
import { NoCityCookieException } from '@exceptions/NoCityCookieException'

export function getCityCookie(): Result {
  const cookieStore = cookies()
  const serverCookieExtractor = new ServerCookieExtractor(cookieStore)
  const cityCookie = serverCookieExtractor.extractCity()

  if (!cityCookie) {
    throw new NoCityCookieException()
  }

  return { cityCookie }
}

interface Result {
  cityCookie: string
}
