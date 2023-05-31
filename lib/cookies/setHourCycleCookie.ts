'use server'

import { cookies } from 'next/headers'

import { HOUR_CYCLE_COOKIE_NAME } from '@constants/cookie'
import type { HourCycle } from '@app-types/HourCycle'

export async function setHourCycleCookie(hourCycle: HourCycle): Promise<void> {
  const cookieStore = cookies()
  await cookieStore.set(HOUR_CYCLE_COOKIE_NAME, hourCycle)
}
