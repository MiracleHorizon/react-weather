import type { Metadata } from 'next'

import { writePageTitle } from '@helpers/writePageTitle'
import { createWeatherService } from '@lib/createWeatherService'

export const metadata: Metadata = {
  title: writePageTitle('Weekly')
}

export default async function ForecastPage() {
  const { weatherService } = createWeatherService()
  const forecastResponse = await weatherService.fetchWeatherForecast()

  return (
    <main>
      <h1>{forecastResponse.city.name}</h1>
    </main>
  )
}
