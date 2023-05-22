import type { BaseWeatherReport, ForecastSys } from '@models/weather'

export interface WeatherForecastReportModel extends BaseWeatherReport {
  dt_txt: string
  pop: number
  sys: ForecastSys
}
