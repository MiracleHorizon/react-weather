import { WeatherReport } from './WeatherReport'
import { SunStateHandler } from '@utils/weather/SunStateHandler'
import { WeatherIconsHandler } from '@utils/weather/WeatherIconsHandler'
import { getOpenWeatherTimezoneOffset } from '@helpers/getOpenWeatherTimezoneOffset'
import { OPEN_WEATHER_TIMESTAMP_MULTIPLIER } from '@constants/api'
import { NIGHT_TIME_END_HOUR, NIGHT_TIME_START_HOUR } from '@constants/date'

import type { SunState } from '@models/SunState'
import type { DayDuration } from '@models/DayDuration'
import type { ReportLocation } from '@models/ReportLocation'
import type { CurrentWeatherReportModel } from '@models/weather'
import type { IconClassNameImpl, LocationImpl } from './types'

export class CurrentWeatherReport
  extends WeatherReport
  implements LocationImpl, IconClassNameImpl
{
  private readonly weatherIconsHandler: WeatherIconsHandler
  private readonly sunStateHandler: SunStateHandler
  public readonly report: CurrentWeatherReportModel

  constructor(report: CurrentWeatherReportModel) {
    super(report)
    this.report = report
    this.weatherIconsHandler = new WeatherIconsHandler(
      !this.isNightTimeReport,
      this.description
    )
    this.sunStateHandler = new SunStateHandler({
      sunrise: this.report.sys.sunrise * OPEN_WEATHER_TIMESTAMP_MULTIPLIER,
      sunset: this.report.sys.sunset * OPEN_WEATHER_TIMESTAMP_MULTIPLIER
    })
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
    const timezone = this.report.timezone
    const locationTimezoneOffset = getOpenWeatherTimezoneOffset(timezone)
    return this.dateHandler.getDateWithLocationTimezone(locationTimezoneOffset)
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
    const locationTimezoneOffset = this.getLocationTimezoneOffset()
    return this.sunStateHandler.adaptSunStateToLocationTime(
      locationTimezoneOffset
    )
  }

  public get dayDuration(): DayDuration {
    const locationTimezoneOffset = this.getLocationTimezoneOffset()
    return this.sunStateHandler.getDayDuration(locationTimezoneOffset)
  }

  private getLocationTimezoneOffset(): number {
    const timezone = this.report.timezone
    return getOpenWeatherTimezoneOffset(timezone)
  }
}
