import { useMemo } from 'react'

import { DateFns } from '@libs/DateFns'
import { DateHandler } from '@utils/DateHandler'
import { getOpenWeatherTimezoneOffset } from '@helpers/getOpenWeatherTimezoneOffset'

export default function DateWidget({
  dateTimestamp,
  dateFormat,
  timezone
}: Props) {
  const dateWithTimezoneOffset = useMemo(() => {
    const locationTimezoneOffset = getOpenWeatherTimezoneOffset(timezone)
    const dateHandler = new DateHandler(dateTimestamp)
    return dateHandler.getDateWithLocationTimezone(locationTimezoneOffset)
  }, [dateTimestamp, timezone])

  return (
    <article className='text-center'>
      <span className='text-[14px] text-gray-500 dark:text-gray-300'>
        {DateFns.formatDate(dateWithTimezoneOffset.getTime(), dateFormat)}
      </span>
    </article>
  )
}

interface Props {
  dateTimestamp: number
  dateFormat: string
  timezone: number
}
