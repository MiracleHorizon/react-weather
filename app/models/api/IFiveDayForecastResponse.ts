import { ICity } from 'models/weather/general/ICity'
import { IForecastWeatherReport } from 'models/weather/reports/IForecastWeatherReport'

export interface IFiveDayForecastResponse {
  cod: string
  message: number
  cnt: number
  list: IForecastWeatherReport[]
  city: ICity
}
