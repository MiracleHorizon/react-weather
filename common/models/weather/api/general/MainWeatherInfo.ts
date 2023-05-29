import type { TemperatureModel } from '@models/weather'

export interface MainWeatherInfo extends TemperatureModel {
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}
