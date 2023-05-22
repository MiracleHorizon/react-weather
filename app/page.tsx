import type { Metadata } from 'next'

import Home from './home'
import { useWeatherService } from '@hooks/useWeatherService'

export const metadata: Metadata = {
  title: 'Home'
}

export default async function HomePage() {
  const { weatherService } = useWeatherService()
  const currentWeatherReport = await weatherService.fetchCurrentWeather()

  return <Home currentWeatherReport={currentWeatherReport} />
}
