import { API_KEY } from '@constants/api'

import { WeatherService } from '@api/WeatherService'
import { getCityCookie } from '@lib/cookies/city'
import { getUnitSystemCookie } from '@lib/cookies/unitSystem'
import { getGeolocationCookie } from '@lib/cookies/geolocation'
import { WrongCredentialsException } from '@exceptions/WrongCredentialsException'

export function createWeatherService(): Result {
  if (!API_KEY) {
    throw new WrongCredentialsException()
  }

  const { unitSystemCookie: unitSystem } = getUnitSystemCookie()
  const { geolocationCookie: geolocation } = getGeolocationCookie()
  const { cityCookie: city } = getCityCookie()

  const weatherService = new WeatherService({
    priority: 'city',
    apiKey: API_KEY,
    unitSystem,
    geolocation,
    city
  })

  return { weatherService }
}

interface Result {
  weatherService: WeatherService
}
