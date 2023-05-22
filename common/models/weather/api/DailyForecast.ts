import type { WeatherForecastReportModel } from '@models/weather'

export interface DailyForecastModel {
  id: number // NOTE: Timestamp первого временного отрезка дневного прогноза
  data: WeatherForecastReportModel[]
}
