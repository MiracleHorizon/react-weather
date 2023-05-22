import { cookies } from 'next/headers'
import type { Metadata } from 'next'

import Home from './home'
import Greeting from '@components/Greeting'
import { WeatherService } from '@api/WeatherService'
import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'

export const metadata: Metadata = {
  title: 'Home'
}

export default async function HomePage() {
  const serverCookieExtractor = new ServerCookieExtractor(cookies())
  const unitSystem = serverCookieExtractor.extractUnitSystem()
  const location = serverCookieExtractor.extractLocation()

  if (!location) {
    return <Greeting title='Hello! Please, enter city' />
  }

  const weatherService = new WeatherService({ location, unitSystem })
  const currentWeatherReport = await weatherService.fetchCurrentWeather()

  return <Home currentWeatherReport={currentWeatherReport} />
}
