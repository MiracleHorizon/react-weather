import { WeatherReport } from './WeatherReport'
import type { PartOfDay, WeatherForecastReportModel } from '@models/weather'

export class WeatherForecastReport extends WeatherReport {
  private readonly forecastReport: WeatherForecastReportModel

  constructor(report: WeatherForecastReportModel) {
    super(report)
    this.forecastReport = report
  }

  public get partOfDay(): PartOfDay {
    return this.forecastReport.sys.pod
  }
}
