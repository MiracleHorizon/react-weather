import { cookies } from 'next/headers'

import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'
import { HOUR_CYCLE_COOKIE_NAME } from '@constants/cookie'
import type { HourCycle } from '@app-types/HourCycle'

export function getHourCycleCookie(): Result {
  const cookieStore = cookies()
  const serverCookieExtractor = new ServerCookieExtractor(cookieStore)
  const hourCycleCookie = serverCookieExtractor.extractHourCycle()

  if (!hourCycleCookie) {
    cookieStore.set(HOUR_CYCLE_COOKIE_NAME, 'h24')

    return {
      hourCycleCookie: 'h24'
    }
  }

  return { hourCycleCookie }
}

interface Result {
  hourCycleCookie: HourCycle
}
