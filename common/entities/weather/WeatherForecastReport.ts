import { WeatherReport } from './WeatherReport'
import { WeatherIconsHandler } from '@utils/weather/WeatherIconsHandler'
import type {
  ForecastCity,
  PartOfDay,
  WeatherForecastReportModel
} from '@models/weather'
import type { ReportLocation } from '@models/ReportLocation'
import type { IconClassNameImpl, LocationImpl } from './types'

interface Constructor {
  report: WeatherForecastReportModel
  forecastCity: ForecastCity
}

export class WeatherForecastReport
  extends WeatherReport
  implements LocationImpl, IconClassNameImpl
{
  private readonly weatherIconsHandler: WeatherIconsHandler
  private readonly forecastCity: ForecastCity
  public readonly report: WeatherForecastReportModel

  constructor({ report, forecastCity }: Constructor) {
    super(report)
    this.report = report
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
    return this.report.sys.pod
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
