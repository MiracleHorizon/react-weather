import type { Metadata } from 'next'

import Home from './home'
import { writePageTitle } from '@helpers/writePageTitle'
import { createWeatherService } from '@lib/createWeatherService'

export const metadata: Metadata = {
  title: writePageTitle('Home')
}

export default async function HomePage() {
  const { weatherService } = createWeatherService()
  const currentWeatherResponse = await weatherService.fetchCurrentWeather()

  return <Home currentWeatherResponse={currentWeatherResponse} />
}
