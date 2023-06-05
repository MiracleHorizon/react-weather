import type { WeatherForecastReportModel } from '@models/weather/index'

export interface DailyForecastModel {
  id: string
  data: WeatherForecastReportModel[]
}
