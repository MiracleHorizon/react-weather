'use client'

import PaintBrushIcon from '@heroicons/react/24/outline/PaintBrushIcon'

import Toggle from '@ui/Toggle'
import { setDarkTheme } from '@lib/cookies/setDarkTheme'
import { setLightTheme } from '@lib/cookies/setLightTheme'

export default function ThemeToggleSection({ withDarkMode }: Props) {
  async function onChange(checked: boolean) {
    await (checked ? setDarkTheme : setLightTheme)()
  }

  return (
    <div className='mb-[8px] flex h-[45px] w-full min-w-max items-center justify-between'>
      <article className='flex'>
        <span className='mr-[10px] h-[24px] w-[24px] [440px-max]:h-[21px] [440px-max]:w-[21px]'>
          <PaintBrushIcon className='dark:stroke-gray-100' />
        </span>
        <span className='text-[18px] text-gray-700 dark:text-gray-100 [440px-max]:text-[16px]'>
          Dark theme
        </span>
      </article>
      <Toggle checked={withDarkMode} onChange={onChange} />
    </div>
  )
}

interface Props {
  withDarkMode: boolean
}
