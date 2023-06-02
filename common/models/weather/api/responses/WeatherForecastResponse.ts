import type { ForecastCity, WeatherForecastReportModel } from '@models/weather'

export interface WeatherForecastResponse {
  cod: string
  message: number
  cnt: number
  city: ForecastCity
  list: WeatherForecastReportModel[]
}
