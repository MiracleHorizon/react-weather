'use client'

import type { Dispatch, SetStateAction } from 'react'
import LanguageIcon from '@heroicons/react/24/solid/LanguageIcon'

import SettingsSection from '../SettingsSection'
import { setLanguageCookie } from '@lib/cookies/language'
import { Language } from '@models/Language'

export default function LanguageSection({ language }: Props) {
  async function handleChange(
    lang: Language,
    setLanguage: Dispatch<SetStateAction<Language>>
  ) {
    await setLanguageCookie(lang)
    setLanguage(lang)
  }

  return (
    <SettingsSection
      title='Language'
      icon={<LanguageIcon className='dark:fill-gray-100' />}
      initialState={language}
      items={Object.values(Language)}
      handleChange={handleChange}
      listboxClassName='w-[100px]'
    />
  )
}

interface Props {
  language: Language
}
