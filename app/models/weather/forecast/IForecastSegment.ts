import { ISys } from '../ISys'
import { IWind } from '../IWind'
import { IRainfall } from '../IRainfall'
import { IClouds } from '../IClouds'
import { IForecastWeather } from './IForecastWeather'
import { IMainForecastInfo } from './IMainForecastInfo'

export interface IForecastSegment {
  dt: number
  main: IMainForecastInfo
  weather: IForecastWeather[]
  clouds: IClouds
  wind: IWind
  visibility: number
  pop: number
  rain?: IRainfall
  snow?: IRainfall
  sys: ISys
  dt_txt: string
}
