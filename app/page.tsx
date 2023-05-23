import type { Metadata } from 'next'

import Home from './home'
import { useWeatherService } from '@hooks/useWeatherService'
import { APP_NAME } from '@constants/app'

export const metadata: Metadata = {
  title: `${APP_NAME} | Home`
}

export default async function HomePage() {
  const { weatherService } = useWeatherService()
  const currentWeatherReport = await weatherService.fetchCurrentWeather()

  return <Home currentWeatherReport={currentWeatherReport} />
}
