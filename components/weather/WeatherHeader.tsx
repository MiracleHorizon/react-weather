import { twJoin } from 'tailwind-merge'

import DateWidget from '@components/weather/DateWidget'
import LocationWidget from '@components/weather/LocationWidget'
import type { ReportLocation } from '@models/ReportLocation'

export default function WeatherHeader({
  location,
  timezone,
  dateTimestamp
}: Props) {
  return (
    <header className='flex w-full items-center justify-between [550px-max]:flex-col'>
      <LocationWidget
        {...location}
        className={twJoin([
          'max-w-[55%]',
          '[440px-max]:mb-[4px]',
          '[550px-441px]:mb-[6px]',
          '[550px-max]:max-w-full'
        ])}
      />
      <DateWidget
        timezone={timezone}
        dateTimestamp={dateTimestamp}
        dateFormat='HH:mm, d MMMM, yyyy'
        className='h-[24px]'
      />
    </header>
  )
}

interface Props {
  location: ReportLocation
  timezone: number
  dateTimestamp: number
}
