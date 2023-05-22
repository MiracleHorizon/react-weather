import { cookies } from 'next/headers'
import type { Metadata } from 'next'

import { WeatherService } from '@api/WeatherService'
import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'

export const metadata: Metadata = {
  title: 'Weekly'
}

export default async function ForecastPage() {
  const cookieExtractor = new ServerCookieExtractor(cookies())
  const weatherService = new WeatherService({
    location: cookieExtractor.extractLocation(),
    unitSystem: cookieExtractor.extractUnitSystem()
  })
  const forecastResponse = await weatherService.fetchWeatherForecast()

  return (
    <main>
      <h1>{forecastResponse.city.name}</h1>
    </main>
  )
}
