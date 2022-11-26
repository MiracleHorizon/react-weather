import { WeatherCondition } from 'models/enums/WeatherCondition'

export interface IWeatherCondition {
  id: number
  main: string
  description: WeatherCondition
  icon: string
}
