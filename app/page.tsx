import type { Metadata } from 'next'

import Home from './home'
import Landing from '@components/Landing'
import { writePageTitle } from '@helpers/writePageTitle'
import { createWeatherService } from '@lib/createWeatherService'
import { getCityCookie } from '@lib/cookies/getCityCookie'
import { getGeolocationCookie } from '@lib/cookies/getGeolocationCookie'

export const metadata: Metadata = {
  title: writePageTitle('Home')
}

export default async function HomePage() {
  const { cityCookie: city } = getCityCookie()
  const { geolocationCookie: geolocation } = getGeolocationCookie()

  if (!city && !geolocation) {
    return <Landing />
  }

  const { weatherService } = createWeatherService()
  const currentWeatherResponse = await weatherService.fetchCurrentWeather()

  return <Home currentWeatherResponse={currentWeatherResponse} />
}
