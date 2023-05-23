import { useCity } from '@hooks/useCity'
import { useUnitSystem } from '@hooks/useUnitSystem'
import { WeatherService } from '@api/WeatherService'
import { WrongCredentialsException } from '@exceptions/WrongCredentialsException'
import { API_KEY } from '@constants/api'

export function useWeatherService() {
  if (!API_KEY) {
    throw new WrongCredentialsException()
  }

  const { city } = useCity()
  const { unitSystem } = useUnitSystem()

  const weatherService = new WeatherService({
    apiKey: API_KEY,
    unitSystem,
    city
  })

  return { weatherService }
}
