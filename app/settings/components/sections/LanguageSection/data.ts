import { Language } from '@models/Language'
import type { SettingsElement } from '../../SettingsSection/SettingsSection.types'

export type LanguageOption = SettingsElement<Language>

export const enItem: LanguageOption = {
  title: 'English',
  value: Language.EN
}
export const ruItem: LanguageOption = {
  title: 'Russian',
  value: Language.RU
}
export const items: LanguageOption[] = [enItem, ruItem]
