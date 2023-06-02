import { memo } from 'react'
import { Listbox } from '@headlessui/react'
import { twJoin } from 'tailwind-merge'

import type { SettingsElement } from '../SettingsSection.types'

function SettingsOption<T extends string>({ item }: Props<T>) {
  return (
    <Listbox.Option
      value={item}
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
          {item.title}
        </span>
      )}
    </Listbox.Option>
  )
}

export default memo(SettingsOption)

interface Props<T extends string> {
  item: SettingsElement<T>
}
