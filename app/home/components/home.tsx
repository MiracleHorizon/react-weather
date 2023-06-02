import { useMemo } from 'react'
import { twJoin } from 'tailwind-merge'

import Divider from '@ui/Divider'
import DateWidget from '@components/widgets/DateWidget'
import LocationWidget from '@components/widgets/LocationWidget'
import TemperatureWidget from '@components/widgets/TemperatureWidget'
import WeatherDetailsWidget from '@components/widgets/WeatherDetailsWidget'
import SunStateWidget from './widgets/SunStateWidget'
import { getUnitSystemCookie } from '@lib/cookies/getUnitSystemCookie'
import { CurrentWeatherReport } from '@entities/weather'
import type { CurrentWeatherResponse } from '@models/weather'

export default function Home({ currentWeatherResponse }: Props) {
  const { unitSystemCookie: unitSystem } = getUnitSystemCookie()
  const currentWeatherReport = useMemo(() => {
    return new CurrentWeatherReport(currentWeatherResponse)
  }, [currentWeatherResponse])
  const {
    sunState,
    location,
    temperature,
    iconClassName,
    dateTimestamp,
    report: {
      wind,
      clouds,
      timezone,
      main: { humidity, pressure }
    }
  } = currentWeatherReport

  return (
    <div
      className={twJoin([
        'flex',
        'w-full',
        'items-start',
        'justify-start',
        'px-[24px]',
        'pt-[24px]',
        '[440px-max]:px-[18px]',
        '[550px-max]:pb-[18px]',
        '[650px-max]:flex-col',
        '[650px-max]:items-center'
      ])}
    >
      <div
        className={twJoin([
          'mr-[20px]',
          'w-[150px]',
          'min-w-[150px]',
          '[650px-max]:mb-[12px]',
          '[650px-max]:mr-0',
          '[650px-max]:w-max',
          '[650px-max]:max-w-[80%]'
        ])}
      >
        <TemperatureWidget
          temperature={temperature.temp}
          weatherIconClassName={iconClassName}
        />
        <LocationWidget {...location} />
        <DateWidget
          dateTimestamp={dateTimestamp}
          dateFormat='d MMMM, yyyy'
          timezone={timezone}
        />
      </div>
      <div className='flex w-full flex-col items-center'>
        <WeatherDetailsWidget
          wind={wind}
          clouds={clouds}
          humidity={humidity}
          pressure={pressure}
          unitSystem={unitSystem}
          className='mt-[8px]'
        />
        <Divider className='my-[10px] [440px-max]:w-[calc(100%-24px)]' />
        <SunStateWidget {...sunState} />
      </div>
    </div>
  )
}

interface Props {
  currentWeatherResponse: CurrentWeatherResponse
}
