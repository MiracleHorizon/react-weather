import { ICity } from 'models/weather/ICity'
import { IForecastSegment } from 'models/weather/forecast/IForecastSegment'

export interface IFiveDayForecastResponse {
  cod: string
  message: number
  cnt: number
  list: IForecastSegment[]
  city: ICity
}
