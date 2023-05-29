import { WeatherReport } from './WeatherReport'
import { WeatherIconsHandler } from '@utils/weather/WeatherIconsHandler'
import type { ReportLocation } from '@models/ReportLocation'
import type { IconClassNameImpl, LocationImpl } from './types'
import type {
  ForecastCity,
  PartOfDay,
  WeatherForecastReportModel
} from '@models/weather'

export class WeatherForecastReport
  extends WeatherReport
  implements LocationImpl, IconClassNameImpl
{
  private readonly weatherIconsHandler: WeatherIconsHandler
  private readonly forecastReport: WeatherForecastReportModel
  private readonly forecastCity: ForecastCity

  constructor(report: WeatherForecastReportModel, forecastCity: ForecastCity) {
    super(report)
    this.forecastReport = report
    this.forecastCity = forecastCity
    this.weatherIconsHandler = new WeatherIconsHandler(
      !this.isNightTimeReport,
      this.description
    )
  }

  private get isNightTimeReport(): boolean {
    return this.partOfDay === 'n'
  }

  private get partOfDay(): PartOfDay {
    return this.forecastReport.sys.pod
  }

  public get iconClassName(): string {
    return this.weatherIconsHandler.getIconClassName()
  }

  public get location(): ReportLocation {
    const { name: city, country: countryCode } = this.forecastCity
    return {
      city,
      countryCode
    }
  }
}
