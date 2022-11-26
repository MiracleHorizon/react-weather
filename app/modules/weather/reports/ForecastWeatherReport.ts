import { WeatherReport } from './WeatherReport'
import { IForecastWeatherReport } from 'models/weather/reports/IForecastWeatherReport'

export class ForecastWeatherReport extends WeatherReport {
  private readonly _forecastReport = {} as IForecastWeatherReport

  constructor(report: IForecastWeatherReport) {
    super(report)
    this._forecastReport = report
  }

  public get partOfDay() {
    return this._forecastReport.sys.pod
  }

  public get probabilityOfPrecipitation() {
    return this._forecastReport.pop
  }
}
