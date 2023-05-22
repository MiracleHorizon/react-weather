import { cookies } from 'next/headers'

import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'

export function useCity() {
  const serverCookieExtractor = new ServerCookieExtractor(cookies())
  const city = serverCookieExtractor.extractCity()

  return { city }
}
