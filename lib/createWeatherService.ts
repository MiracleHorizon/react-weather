import { API_KEY } from '@constants/api'

import { WeatherService } from '@api/WeatherService'
import { getCityCookie } from '@lib/cookies/getCityCookie'
import { getUnitSystemCookie } from '@lib/cookies/getUnitSystemCookie'
import { WrongCredentialsException } from '@exceptions/WrongCredentialsException'

export function createWeatherService(): Result {
  if (!API_KEY) {
    throw new WrongCredentialsException()
  }

  const { cityCookie: city } = getCityCookie()
  const { unitSystemCookie: unitSystem } = getUnitSystemCookie()

  const weatherService = new WeatherService({
    apiKey: API_KEY,
    unitSystem,
    city
  })

  return { weatherService }
}

interface Result {
  weatherService: WeatherService
}
