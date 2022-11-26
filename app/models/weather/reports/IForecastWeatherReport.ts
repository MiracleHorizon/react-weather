import { IWeatherReport } from './IWeatherReport'
import { IForecastSys } from 'models/weather/general/IForecastSys'

export interface IForecastWeatherReport extends IWeatherReport {
  dt_txt: string
  pop: number
  sys: IForecastSys
}
