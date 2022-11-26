import { IMainWeatherInfo } from 'models/weather/general/IMainWeatherInfo'
import { IWeatherCondition } from 'models/weather/general/IWeatherCondition'
import { IRecentPrecipitation } from 'models/weather/general/IRecentPrecipitation'
import { IClouds } from 'models/weather/general/IClouds'
import { IWind } from 'models/weather/general/IWind'

export interface IWeatherReport {
  dt: number
  main: IMainWeatherInfo
  visibility: number
  wind: IWind
  weather: IWeatherCondition[]
  clouds: IClouds
  rain?: IRecentPrecipitation
  show?: IRecentPrecipitation
}
