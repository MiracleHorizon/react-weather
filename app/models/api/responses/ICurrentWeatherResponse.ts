import { ICoords } from 'models/weather/ICoords'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'

export interface ICurrentWeatherResponse extends IWeatherReport {
  coord: ICoords
  base: string
  timezone: number
  id: number
  name: string
  cod: number
}
