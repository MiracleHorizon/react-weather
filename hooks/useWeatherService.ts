import { WeatherService } from '@api/WeatherService'
import { useSelectCity } from '@hooks/useSelectCity'
import { useSelectUnitSystem } from '@hooks/useSelectUnitSystem'
import { WrongCredentialsException } from '@exceptions/WrongCredentialsException'
import { API_KEY } from '@constants/api'

export function useWeatherService() {
  if (!API_KEY) {
    throw new WrongCredentialsException()
  }

  const { city } = useSelectCity()
  const { unitSystem } = useSelectUnitSystem()

  const weatherService = new WeatherService({
    apiKey: API_KEY,
    unitSystem,
    city
  })

  return { weatherService }
}
