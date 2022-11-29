import { WeatherCondition } from 'models/weather/enums/WeatherCondition'

export interface IWeatherCondition {
  id: number
  main: string
  description: WeatherCondition
  icon: string
}
