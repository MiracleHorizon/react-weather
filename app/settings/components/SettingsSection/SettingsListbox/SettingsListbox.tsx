import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

import SettingsOption from './SettingsOption'
import SettingsOptionsList from './SettingsOptionsList'
import SettingsListboxButton from './SettingsListboxButton'
import type {
  SettingsElement,
  SettingsSectionProps
} from '../SettingsSection.types'

export default function SettingsListbox<T extends string>({
  initialState,
  items,
  handleChange,
  listboxClassName
}: ListboxProps<T>) {
  const [selectedItem, setSelectedItem] = useState(initialState)

  function onChange(value: SettingsElement<T>) {
    handleChange(value, setSelectedItem)
  }

  return (
    <div className={twMerge('relative max-w-max', listboxClassName)}>
      <Listbox value={selectedItem} onChange={onChange}>
        <SettingsListboxButton title={selectedItem.title} />
        <SettingsOptionsList>
          {items.map(item => (
            <SettingsOption key={item.title} item={item} />
          ))}
        </SettingsOptionsList>
      </Listbox>
    </div>
  )
}

type ListboxProps<T extends string> = Omit<
  SettingsSectionProps<T>,
  'title' | 'icon'
>
