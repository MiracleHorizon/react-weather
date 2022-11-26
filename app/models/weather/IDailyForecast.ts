import { IForecastWeatherReport } from './reports/IForecastWeatherReport'

export interface IDailyForecast {
  identifier: number // Timestamp первого временного отрезка дневного прогноза.
  data: IForecastWeatherReport[]
}
