import type {
  BaseWeatherReport,
  CurrentWeatherSys,
  Coords
} from '@models/weather'

export interface CurrentWeatherReportModel extends BaseWeatherReport {
  id: number
  code: number
  name: string
  base: string
  timezone: number
  coords: Coords
  sys: CurrentWeatherSys
}
