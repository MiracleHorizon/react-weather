import { memo } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'
import MapPinIcon from '@heroicons/react/24/solid/MapPinIcon'

import { IntlDisplayNamesHandler } from '@utils/IntlDisplayNamesHandler'

function LocationWidget({ city, countryCode, className }: Props) {
  return (
    <div className={twMerge('flex items-center justify-center', className)}>
      <MapPinIcon
        className={twJoin([
          'mr-[4px]',
          'h-[24px]',
          'w-[24px]',
          'fill-gray-400',
          'dark:fill-gray-200',
          '[350px-max]:hidden'
        ])}
      />
      <span
        className={twJoin([
          'block',
          'h-[24px]',
          'w-[calc(100%-24px-4px)]',
          'truncate',
          'text-[18px]',
          'font-light',
          'text-gray-500',
          'dark:text-gray-200',
          '[440px-max]:text-[16px]'
        ])}
      >
        {city},{' '}
        {IntlDisplayNamesHandler.transformRegionCodeToRegionName(countryCode)}
      </span>
    </div>
  )
}

export default memo(LocationWidget)

interface Props {
  city: string
  countryCode: string
  className?: string
}
