import { useMemo } from 'react'
import LocationSection from './components/LocationSection'
import TemperatureSection from './components/TemperatureSection'
import { CurrentWeatherReport } from '@entities/weather/CurrentWeatherReport'
import type { CurrentWeatherReportModel } from '@models/weather'

export default function Home({ currentWeatherReport }: Props) {
  const { location, temperature, iconClassName } = useMemo(() => {
    return new CurrentWeatherReport(currentWeatherReport)
  }, [currentWeatherReport])

  return (
    <main className='w-screen py-[40px]'>
      <TemperatureSection
        temperature={temperature}
        weatherIconClassName={iconClassName}
      />
      <LocationSection {...location} />
    </main>
  )
}

interface Props {
  currentWeatherReport: CurrentWeatherReportModel
}
