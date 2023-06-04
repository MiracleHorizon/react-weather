import { useMemo } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import { DateFns } from '@libs/DateFns'
import { DateHandler } from '@utils/DateHandler'
import { getOpenWeatherTimezoneOffset } from '@helpers/getOpenWeatherTimezoneOffset'

export default function DateWidget({
  dateTimestamp,
  dateFormat,
  timezone,
  className
}: Props) {
  const dateWithTimezoneOffset = useMemo(() => {
    const dateHandler = new DateHandler(dateTimestamp)
    const locationTimezoneOffset = getOpenWeatherTimezoneOffset(timezone)
    return dateHandler.getDateWithLocationTimezone(locationTimezoneOffset)
  }, [dateTimestamp, timezone])

  return (
    <article className={twMerge('text-center', className)}>
      <span
        className={twJoin([
          'block',
          'h-full',
          'w-full',
          'truncate',
          'text-[18px]',
          'font-light',
          'text-gray-500',
          'dark:text-gray-300',
          '[440px-max]:text-[16px]'
        ])}
      >
        {DateFns.formatDate(dateWithTimezoneOffset.getTime(), dateFormat)}
      </span>
    </article>
  )
}

interface Props {
  dateTimestamp: number
  dateFormat: string
  timezone: number
  className?: string
}
