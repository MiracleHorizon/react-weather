import { WeatherReport } from './WeatherReport'
import { SunStateHandler } from '@utils/weather/SunStateHandler'
import { WeatherIconsHandler } from '@utils/weather/WeatherIconsHandler'
import { OPEN_WEATHER_TIMESTAMP_MULTIPLIER } from '@constants/api'
import { NIGHT_TIME_END_HOUR, NIGHT_TIME_START_HOUR } from '@constants/date'
import type { SunState } from '@models/SunState'
import type { ReportLocation } from '@models/ReportLocation'
import type { CurrentWeatherReportModel } from '@models/weather'
import type { IconClassNameImpl, LocationImpl } from './types'

export class CurrentWeatherReport
  extends WeatherReport
  implements LocationImpl, IconClassNameImpl
{
  private readonly weatherIconsHandler: WeatherIconsHandler
  public readonly report: CurrentWeatherReportModel

  constructor(report: CurrentWeatherReportModel) {
    super(report)
    this.report = report
    this.weatherIconsHandler = new WeatherIconsHandler(
      !this.isNightTimeReport,
      this.description
    )
  }

  private get isNightTimeReport(): boolean {
    const locationDate = this.getLocationDate()
    const locationHours = locationDate.getHours()
    return !(
      locationHours >= NIGHT_TIME_END_HOUR &&
      locationHours <= NIGHT_TIME_START_HOUR
    )
  }

  private getLocationDate(): Date {
    // NOTE: Open Weather API возвращает timezone offset в формате секунд
    const locationTimezoneOffset = this.getLocationTimezoneOffset()
    return this.dateHandler.getDateWithLocationTimezone(locationTimezoneOffset)
  }

  private getLocationTimezoneOffset(): number {
    return this.report.timezone / (60 * 60)
  }

  public get iconClassName(): string {
    return this.weatherIconsHandler.getIconClassName()
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
    const locationTimezoneOffset = this.getLocationTimezoneOffset()
    const sunStateHandler = new SunStateHandler({
      sunrise: sunrise * OPEN_WEATHER_TIMESTAMP_MULTIPLIER,
      sunset: sunset * OPEN_WEATHER_TIMESTAMP_MULTIPLIER
    })
    return sunStateHandler.adaptSunStateToLocationTime(locationTimezoneOffset)
  }
}
