import { WeatherReport } from './WeatherReport'
import { ICurrentWeatherReport } from 'models/weather/reports/ICurrentWeatherReport'

export class CurrentWeatherReport extends WeatherReport {
  private readonly _currentReport = {} as ICurrentWeatherReport

  constructor(report: ICurrentWeatherReport) {
    super(report)
    this._currentReport = report
  }

  public get location() {
    const {
      name: city,
      sys: { country: countryCode },
    } = this._currentReport

    return {
      city,
      countryCode,
    }
  }

  public get sunriseAndSunsetTimes() {
    const { sunrise, sunset } = this._currentReport.sys

    return {
      sunrise,
      sunset,
    }
  }
}
