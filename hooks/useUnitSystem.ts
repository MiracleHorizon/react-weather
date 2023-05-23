import { cookies } from 'next/headers'

import { UnitSystem } from '@models/UnitSystem'
import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'
import { UNIT_SYSTEM_COOKIE_NAME } from '@constants/cookie'

export function useUnitSystem() {
  const serverCookieExtractor = new ServerCookieExtractor(cookies())
  const unitSystem = serverCookieExtractor.extractUnitSystem()

  if (!unitSystem) {
    cookies().set({
      name: UNIT_SYSTEM_COOKIE_NAME,
      value: UnitSystem.DEFAULT
    })

    return {
      unitSystem: UnitSystem.DEFAULT
    }
  }

  return { unitSystem }
}
