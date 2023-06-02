'use client'

import LanguageIcon from '@heroicons/react/24/solid/LanguageIcon'

import SettingsSection from 'app/settings/components/SettingsSection'
import { setLanguageCookie } from '@lib/cookies/setLanguageCookie'
import { Language } from '@models/Language'
import type { SetState } from '@app-types/SetState'
import { enItem, items, type LanguageOption, ruItem } from './data'

export default function LanguageSection({ language }: Props) {
  async function handleChange(
    lang: LanguageOption,
    setLanguage: SetState<LanguageOption>
  ) {
    await setLanguageCookie(lang.value)
    setLanguage(lang)
  }

  return (
    <SettingsSection
      title='Language'
      icon={<LanguageIcon className='dark:fill-gray-100' />}
      initialState={language === Language.EN ? enItem : ruItem}
      items={items}
      handleChange={handleChange}
      listboxClassName='w-[100px]'
    />
  )
}

interface Props {
  language: Language
}
