import ThemeToggleSection from './sections/ThemeToggleSection'
import LanguageSection from './sections/LanguageSection'
import HourCycleSection from './sections/HourCycleSection'
import { getThemeCookie } from '@lib/cookies/getThemeCookie'
import { getLanguageCookie } from '@lib/cookies/getLanguageCookie'
import { getHourCycleCookie } from '@lib/cookies/getHourCycleCookie'

export default function Settings() {
  const { withDarkMode } = getThemeCookie()
  const { languageCookie: language } = getLanguageCookie()
  const { hourCycleCookie: hourCycle } = getHourCycleCookie()

  return (
    <div className='w-full px-[24px] pt-[10px] [440px-max]:px-[18px] [550px-max]:pb-[12px]'>
      <article className='mb-[12px] w-full [440px-max]:mb-[8px]'>
        <h1 className='text-center text-[32px] text-gray-700 dark:text-gray-100 [440px-max]:text-[24px] [550px-max]:text-[28px]'>
          Settings
        </h1>
      </article>
      <div className='flex w-full flex-col items-center'>
        <ThemeToggleSection withDarkMode={withDarkMode} />
        <LanguageSection language={language} />
        <HourCycleSection hourCycle={hourCycle} />
      </div>
    </div>
  )
}
