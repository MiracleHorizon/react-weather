import { DateHandler } from 'modules/DateHandler'
import { WeatherReport } from './WeatherReport'
import { IForecastWeatherReport } from 'models/weather/reports/IForecastWeatherReport'

export class ForecastWeatherReport extends WeatherReport {
  private readonly _forecastReport = {} as IForecastWeatherReport
  private readonly _dateHandler = new DateHandler(new Date().toLocaleString())

  constructor(report: IForecastWeatherReport) {
    super(report)
    this._forecastReport = report
    this._dateHandler = new DateHandler(report.dt_txt)
  }

  public get partOfDay() {
    return this._forecastReport.sys.pod
  }

  public get probabilityOfPrecipitation() {
    return this._forecastReport.pop / 100
  }

  public get date() {
    return this._dateHandler
  }
}
