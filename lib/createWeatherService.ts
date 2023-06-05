import { API_KEY } from '@constants/api'

import { WrongCredentialsException } from '@exceptions/WrongCredentialsException'
import { WeatherService } from '@api/WeatherService'
import { LocationPriority } from '@models/LocationPriority'
import { getUnitSystemCookie } from '@lib/cookies/getUnitSystemCookie'
import { getGeolocationCookie } from '@lib/cookies/getGeolocationCookie'
import { getCityCookie } from '@lib/cookies/getCityCookie'

export function createWeatherService(): Result {
  if (!API_KEY) {
    throw new WrongCredentialsException()
  }

  const { unitSystemCookie: unitSystem } = getUnitSystemCookie()
  const { geolocationCookie: geolocation } = getGeolocationCookie()
  const { cityCookie: city } = getCityCookie()

  const weatherService = new WeatherService({
    locationPriority: LocationPriority.CITY,
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
