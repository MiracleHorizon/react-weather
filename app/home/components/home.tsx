import { useMemo } from 'react'

import LocationWidget from './widgets/LocationWidget'
import TemperatureWidget from './widgets/TemperatureWidget'
import SunStateWidget from './widgets/SunStateWidget'
import { CurrentWeatherReport } from '@entities/weather'
import type { CurrentWeatherResponse } from '@models/weather'

export default function Home({ currentWeatherResponse }: Props) {
  const currentWeatherReport = useMemo(() => {
    return new CurrentWeatherReport(currentWeatherResponse)
  }, [currentWeatherResponse])
  const { sunState, location, temperature, iconClassName } =
    currentWeatherReport

  return (
    <div className='flex h-full w-full justify-between px-[40px] [440px-max]:px-[16px] [650px-max]:flex-col [650px-max]:items-center'>
      <div>
        <TemperatureWidget
          mainTemperature={temperature.main}
          weatherIconClassName={iconClassName}
        />
        <LocationWidget {...location} />
      </div>
      <div className='flex h-full flex-col'>
        <SunStateWidget {...sunState} />
      </div>
    </div>
  )
}

interface Props {
  currentWeatherResponse: CurrentWeatherResponse
}
