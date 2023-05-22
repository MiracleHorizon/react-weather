import { useMemo } from 'react'

import LocationSection from './LocationSection'
import TemperatureSection from './TemperatureSection'
import { CurrentWeatherReport } from '@entities/weather/CurrentWeatherReport'
import type { CurrentWeatherReportModel } from '@models/weather'

export default function Home({ currentWeatherReport }: Props) {
  const { location, temperature, iconClassName } = useMemo(() => {
    return new CurrentWeatherReport(currentWeatherReport)
  }, [currentWeatherReport])

  return (
    <>
      <TemperatureSection
        temperature={temperature}
        weatherIconClassName={iconClassName}
      />
      <LocationSection {...location} />
    </>
  )
}

interface Props {
  currentWeatherReport: CurrentWeatherReportModel
}
