import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'

export interface IDailyForecast {
  identifier: number // Timestamp первого временного отрезка дневного прогноза.
  data: IWeatherReport[]
}
