import { useMemo } from 'react'
import { twJoin } from 'tailwind-merge'

import Divider from '@ui/Divider'
import DateWidget from '@components/widgets/DateWidget'
import LocationWidget from '@components/widgets/LocationWidget'
import TemperatureWidget from '@components/widgets/TemperatureWidget'
import WeatherDetailsWidget from '@components/widgets/WeatherDetailsWidget'
import SunStateWidget from './widgets/SunStateWidget'
import { CurrentWeatherReport } from '@entities/weather'
import { OPEN_WEATHER_TIMESTAMP_MULTIPLIER } from '@constants/api'
import type { CurrentWeatherResponse } from '@models/weather'

export default function Home({ currentWeatherResponse }: Props) {
  const currentWeatherReport = useMemo(() => {
    return new CurrentWeatherReport(currentWeatherResponse)
  }, [currentWeatherResponse])
  const {
    sunState,
    location,
    temperature,
    iconClassName,
    report: {
      wind,
      clouds,
      main: { humidity, pressure },
      dt: dateTimestamp
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
          'w-[130px]',
          'min-w-[130px]',
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
          dateTimestamp={dateTimestamp * OPEN_WEATHER_TIMESTAMP_MULTIPLIER}
          dateFormat='d MMMM, yyyy'
        />
      </div>
      <div className='flex w-full flex-col items-center'>
        <WeatherDetailsWidget
          wind={wind}
          clouds={clouds.all}
          humidity={humidity}
          pressure={pressure}
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
