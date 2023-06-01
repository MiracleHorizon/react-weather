import { twJoin } from 'tailwind-merge'

import SettingsListbox from './SettingsListbox'
import type { SettingsSectionProps } from './SettingsSection.types'

export default function SettingsSection<T extends string>({
  title,
  icon,
  ...listboxProps
}: SettingsSectionProps<T>) {
  return (
    <section
      className={twJoin([
        'flex',
        'w-full',
        'items-center',
        'justify-between',
        'text-gray-700',
        '[&:not(&:last-of-type)]:mb-[10px]',
        '[350px-max]:flex-col',
        '[350px-max]:[&:not(&:last-of-type)]:mb-[14px]'
      ])}
    >
      <article className='flex items-center [350px-max]:mb-[6px]'>
        <span className='mr-[10px] h-[24px] w-[24px] [350px-max]:mr-[5px] [440px-max]:h-[21px] [440px-max]:w-[21px]'>
          {icon}
        </span>
        <span className='text-[18px] dark:text-gray-200 [440px-max]:text-[16px]'>
          {title}
        </span>
      </article>
      <SettingsListbox
        {...listboxProps}
        listboxClassName='min-w-[80px] [350px-max]:w-full max-w-[150px]'
      />
    </section>
  )
}
