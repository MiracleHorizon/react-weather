'use server'

import { cookies } from 'next/headers'

import { CITY_COOKIE_NAME } from '@constants/cookie'

export async function setCityCookie(value: string): Promise<void> {
  const cookieStore = cookies()
  await cookieStore.set(CITY_COOKIE_NAME, value)
}
