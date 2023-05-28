'use client'

import { memo } from 'react'
import { Switch } from '@headlessui/react'
import { twJoin, twMerge } from 'tailwind-merge'

function Toggle({ checked, onChange, rootClassName, sliderClassName }: Props) {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={twMerge(
        twJoin([
          'flex',
          'h-[30px]',
          'w-[60px]',
          'cursor-pointer',
          'rounded-full',
          'border-2',
          'border-transparent',
          'bg-amber-400',
          'transition-colors',
          'duration-200',
          'ease-out',
          'focus:outline-none',
          'dark:bg-white'
        ]),
        rootClassName
      )}
    >
      <div
        className={twMerge(
          twJoin([
            'h-[26px]',
            'w-[26px]',
            'transform',
            'rounded-full',
            'bg-white',
            'shadow-lg',
            'ring-0',
            'transition',
            'duration-200',
            'ease-out',
            'dark:bg-gray-600'
          ]),
          checked ? 'translate-x-[30px]' : 'translate-x-0',
          sliderClassName
        )}
      />
    </Switch>
  )
}

export default memo(Toggle)

interface Props {
  checked: boolean
  onChange: (checked: boolean) => void
  rootClassName?: string
  sliderClassName?: string
}
