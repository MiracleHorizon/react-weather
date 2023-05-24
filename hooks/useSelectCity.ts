import { cookies } from 'next/headers'

import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'
import { NoCityCookieException } from '@exceptions/NoCityCookieException'

export function useSelectCity() {
  const serverCookieExtractor = new ServerCookieExtractor(cookies())
  const city = serverCookieExtractor.extractCity()

  if (!city) {
    throw new NoCityCookieException()
  }

  return { city }
}
