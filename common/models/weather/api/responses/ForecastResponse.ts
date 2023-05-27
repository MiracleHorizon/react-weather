import type { ForecastCity, WeatherForecastReportModel } from '@models/weather'

export interface ForecastResponse {
  cod: string
  message: number
  cnt: number
  city: ForecastCity
  list: WeatherForecastReportModel[]
}
