import { memo } from 'react'
import { Listbox } from '@headlessui/react'
import { twJoin } from 'tailwind-merge'

function SettingsOption<T extends string>({ value }: Props<T>) {
  return (
    <Listbox.Option
      value={value}
      className={({ active }) =>
        twJoin([
          'relative',
          'cursor-pointer',
          'select-none',
          'px-[12px]',
          'py-[8px]',
          'text-[16px]',
          active ? 'bg-gray-100' : 'text-gray-700'
        ])
      }
    >
      {({ selected }) => (
        <span
          className={twJoin(
            'truncate text-center',
            selected ? 'font-medium' : 'font-normal'
          )}
        >
          {value}
        </span>
      )}
    </Listbox.Option>
  )
}

export default memo(SettingsOption)

interface Props<T extends string> {
  value: T
}
