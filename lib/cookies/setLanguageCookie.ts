'use server'

import { cookies } from 'next/headers'

import { LANGUAGE_COOKIE_NAME } from '@constants/cookie'
import type { Language } from '@models/Language'

export async function setLanguageCookie(language: Language): Promise<void> {
  const cookieStore = cookies()
  await cookieStore.set(LANGUAGE_COOKIE_NAME, language)
}
