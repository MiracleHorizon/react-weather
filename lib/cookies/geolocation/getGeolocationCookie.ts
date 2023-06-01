import { cookies } from 'next/headers'

import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'
import type { Geolocation } from '@models/Geolocation'

export function getGeolocationCookie(): Result {
  const cookieStore = cookies()
  const serverCookieExtractor = new ServerCookieExtractor(cookieStore)
  const geolocationCookie = serverCookieExtractor.extractGeolocation()

  return { geolocationCookie }
}

interface Result {
  geolocationCookie: Geolocation | null
}
