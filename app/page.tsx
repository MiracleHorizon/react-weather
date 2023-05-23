import type { Metadata } from 'next'

import Home from './home'
import { useWeatherService } from '@hooks/useWeatherService'
import { writePageTitle } from '@helpers/writePageTitle'

export const metadata: Metadata = {
  title: writePageTitle('Home')
}

export default async function HomePage() {
  const { weatherService } = useWeatherService()
  const currentWeatherResponse = await weatherService.fetchCurrentWeather()

  return <Home currentWeatherResponse={currentWeatherResponse} />
}
