import type { Metadata } from 'next'
import { useWeatherService } from '@hooks/useWeatherService'

export const metadata: Metadata = {
  title: 'Weekly'
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
