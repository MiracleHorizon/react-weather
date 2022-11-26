import { ICoords } from 'models/weather/general/ICoords'
import { ICurrentSys } from 'models/weather/general/ICurrentSys'
import { IWeatherReport } from 'models/weather/reports/IWeatherReport'

export interface ICurrentWeatherReport extends IWeatherReport {
  id: number
  timezone: number
  base: string
  code: number
  coords: ICoords
  name: string
  sys: ICurrentSys
}
