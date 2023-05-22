import type { City, WeatherForecastReportModel } from '@models/weather'

export interface ForecastResponse {
  cod: string
  message: number
  cnt: number
  city: City
  list: WeatherForecastReportModel[]
}
