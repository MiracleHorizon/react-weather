'use server'

import { cookies } from 'next/headers'

import { UNIT_SYSTEM_COOKIE_NAME } from '@constants/cookie'
import type { UnitSystem } from '@models/UnitSystem'

export async function setUnitSystemCookie(
  unitSystem: UnitSystem
): Promise<void> {
  const cookieStore = cookies()
  await cookieStore.set(UNIT_SYSTEM_COOKIE_NAME, unitSystem)
}
