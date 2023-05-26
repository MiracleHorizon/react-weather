import { WeatherReport } from './WeatherReport'
import type { SunState } from '@models/SunState'
import type { ReportLocation } from '@models/ReportLocation'
import type { CurrentWeatherReportModel } from '@models/weather'

export class CurrentWeatherReport extends WeatherReport {
  public readonly report: CurrentWeatherReportModel

  constructor(report: CurrentWeatherReportModel) {
    super(report)
    this.report = report
  }

  public get location(): ReportLocation {
    const {
      name: city,
      sys: { country: countryCode }
    } = this.report
    return { city, countryCode }
  }

  public get sunState(): SunState {
    const { sunrise, sunset } = this.report.sys
    return { sunrise, sunset }
  }
}
