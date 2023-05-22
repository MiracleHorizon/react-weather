import { cookies } from 'next/headers'

import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'

export function useClientLocation() {
  const serverCookieExtractor = new ServerCookieExtractor(cookies())
  const location = serverCookieExtractor.extractLocation()

  return { location }
}
