import { memo } from 'react'
import { Listbox } from '@headlessui/react'
import { twJoin } from 'tailwind-merge'
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon'

function SettingsListboxButton({ title }: Props) {
  return (
    <Listbox.Button
      className={twJoin([
        'relative',
        'flex',
        'h-[45px]',
        'w-full',
        'cursor-pointer',
        'items-center',
        'justify-between',
        'rounded-lg',
        'shadow',
        'px-[12px]',
        '[440px-max]:h-[38px]',
        '[440px-max]:pr-[8px]',
        'dark:bg-gray-100'
      ])}
    >
      <span className='mr-[6px] truncate text-[16px] font-medium [440px-max]:text-[14px]'>
        {title}
      </span>
      <span className='flex items-center justify-center'>
        <ChevronUpDownIcon className='h-[25px] w-[25px] text-gray-400' />
      </span>
    </Listbox.Button>
  )
}

export default memo(SettingsListboxButton)

interface Props {
  title: string
}
