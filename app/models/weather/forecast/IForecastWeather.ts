import { WeatherCondition } from 'models/WeatherCondition'

export interface IForecastWeather {
  id: number
  main: string
  description: WeatherCondition
  icon: string
}
