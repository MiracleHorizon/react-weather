import type { Metadata } from 'next'

import Forecast from './components'
import Landing from '@components/Landing'
import { writePageTitle } from '@helpers/writePageTitle'
import { createWeatherService } from '@lib/createWeatherService'
import { getGeolocationCookie } from '@lib/cookies/getGeolocationCookie'
import { getCityCookie } from '@lib/cookies/getCityCookie'

export const metadata: Metadata = {
  title: writePageTitle('Weekly')
}

export default async function ForecastPage() {
  const { cityCookie: city } = getCityCookie()
  const { geolocationCookie: geolocation } = getGeolocationCookie()

  if (!city && !geolocation) {
    return <Landing />
  }

  const { weatherService } = await createWeatherService()
  const weatherForecastResponse = await weatherService.fetchWeatherForecast()

  return <Forecast weatherForecastResponse={weatherForecastResponse} />
}
