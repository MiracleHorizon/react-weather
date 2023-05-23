import type { Metadata } from 'next'
import { useWeatherService } from '@hooks/useWeatherService'
import { APP_NAME } from '@constants/app'

export const metadata: Metadata = {
  title: `${APP_NAME} | Weekly`
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
