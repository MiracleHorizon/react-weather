import { cookies } from 'next/headers'

import { WeatherService } from '@api/WeatherService'
import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'

export function useWeatherService() {
  const serverCookieExtractor = new ServerCookieExtractor(cookies())
  const weatherService = new WeatherService({
    city: serverCookieExtractor.extractCity(),
    unitSystem: serverCookieExtractor.extractUnitSystem()
  })

  return { weatherService }
}
