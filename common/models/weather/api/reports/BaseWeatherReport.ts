import type {
  Clouds,
  MainWeatherInfo,
  RecentPrecipitation,
  WeatherConditionModel,
  Wind
} from '@models/weather'

export interface BaseWeatherReport {
  dt: number
  wind: Wind
  clouds: Clouds
  main: MainWeatherInfo
  weather: WeatherConditionModel[]
  visibility: number
  rain?: RecentPrecipitation
  show?: RecentPrecipitation
}
