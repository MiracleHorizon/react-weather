'use client'

import Toggle from '@ui/Toggle'
import { setDarkTheme } from '@lib/cookies/setDarkTheme'
import { setLightTheme } from '@lib/cookies/setLightTheme'

export default function ThemeToggle({ withDarkMode }: Props) {
  async function onChange(checked: boolean) {
    await (checked ? setDarkTheme : setLightTheme)()
  }

  return (
    <div className='mb-[8px] flex h-[45px] w-full min-w-max items-center justify-between'>
      <span className='text-[18px] text-gray-700 dark:text-gray-100'>
        Dark theme
      </span>
      <Toggle checked={withDarkMode} onChange={onChange} />
    </div>
  )
}

interface Props {
  withDarkMode: boolean
}
