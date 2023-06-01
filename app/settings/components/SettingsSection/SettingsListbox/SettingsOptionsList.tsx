import { Listbox, Transition } from '@headlessui/react'
import { Fragment, type PropsWithChildren } from 'react'
import { twJoin } from 'tailwind-merge'

export default function SettingsOptionsList({ children }: PropsWithChildren) {
  return (
    <Transition
      as={Fragment}
      enter='transition ease-in duration-80'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition ease-out duration-150'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <Listbox.Options
        className={twJoin([
          'absolute',
          'left-[50%]',
          'right-[50%]',
          'z-[1000]',
          'mt-[4px]',
          'max-h-[200px]',
          'w-full',
          'min-w-max',
          'translate-x-[-50%]',
          'transform',
          'overflow-auto',
          'rounded-md',
          'bg-white',
          'shadow-lg',
          'ring-1',
          'ring-black',
          'ring-opacity-5',
          'focus:outline-none'
        ])}
      >
        {children}
      </Listbox.Options>
    </Transition>
  )
}
