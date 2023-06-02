import type { WeatherForecastReportModel } from '@models/weather'

export interface DailyForecastModel {
  id: string
  data: WeatherForecastReportModel[]
}
