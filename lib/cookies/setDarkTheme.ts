'use server'

import { cookies } from 'next/headers'

import { Theme } from '@app-types/Theme'
import { THEME_COOKIE_NAME } from '@constants/cookie'

export async function setDarkTheme(): Promise<void> {
  const cookieStore = cookies()
  await cookieStore.set(THEME_COOKIE_NAME, Theme.DARK)
}
