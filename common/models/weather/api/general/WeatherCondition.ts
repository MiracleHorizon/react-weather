import { WeatherDescription } from '@models/weather'

export interface WeatherConditionModel {
  id: number
  main: string
  icon: string
  description: WeatherDescription
}
