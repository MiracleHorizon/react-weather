import { cookies } from 'next/headers'

import { UnitSystem } from '@models/UnitSystem'
import { UNIT_SYSTEM_COOKIE_NAME } from '@constants/cookie'
import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'

export function getUnitSystemCookie(): Result {
  const cookieStore = cookies()
  const serverCookieExtractor = new ServerCookieExtractor(cookieStore)
  const unitSystemCookie = serverCookieExtractor.extractUnitSystem()

  if (!unitSystemCookie) {
    cookieStore.set(UNIT_SYSTEM_COOKIE_NAME, UnitSystem.DEFAULT)

    return {
      unitSystemCookie: UnitSystem.METRIC
    }
  }

  return { unitSystemCookie }
}

interface Result {
  unitSystemCookie: UnitSystem
}
