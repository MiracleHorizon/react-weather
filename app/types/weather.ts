import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'

export type TForecastsList = IDailyForecast[]

// todo перенести в модели
export interface IDailyForecast {
  identifier: number // Timestamp первого временного отрезка дневного прогноза.
  data: IWeatherReport[]
}
