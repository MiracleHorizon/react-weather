import { ICity } from 'models/weather/ICity'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'

export interface IFiveDayForecastResponse {
  cod: string
  message: number
  cnt: number
  list: IWeatherReport[]
  city: ICity
}
