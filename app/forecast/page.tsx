import type { Metadata } from 'next'

import { useWeatherService } from '@hooks/useWeatherService'
import { writePageTitle } from '@helpers/writePageTitle'

export const metadata: Metadata = {
  title: writePageTitle('Weekly')
}

export default async function ForecastPage() {
  const { weatherService } = useWeatherService()
  const forecastResponse = await weatherService.fetchWeatherForecast()

  return (
    <main>
      <h1>{forecastResponse.city.name}</h1>
    </main>
  )
}
