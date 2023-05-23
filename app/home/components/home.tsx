import { useMemo } from 'react'

import LocationWidget from './widgets/LocationWidget'
import TemperatureWidget from './widgets/TemperatureWidget'
import { CurrentWeatherReport } from '@entities/weather'
import type { CurrentWeatherResponse } from '@models/weather'

export default function Home({ currentWeatherResponse }: Props) {
  const currentWeatherReport = useMemo(() => {
    return new CurrentWeatherReport(currentWeatherResponse)
  }, [currentWeatherResponse])
  const { location, temperature, iconClassName } = currentWeatherReport

  return (
    <>
      <TemperatureWidget
        mainTemperature={temperature.main}
        weatherIconClassName={iconClassName}
      />
      <LocationWidget {...location} />
    </>
  )
}

interface Props {
  currentWeatherResponse: CurrentWeatherResponse
}
