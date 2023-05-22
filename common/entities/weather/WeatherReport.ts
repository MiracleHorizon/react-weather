import { type BaseWeatherReport, WeatherDescription } from '@models/weather'
import { Temperature } from '@entities/Temperature'
import { DateHandler } from '@utils/DateHandler'
import { WeatherIconsHandler } from '@utils/WeatherIconsHandler'
import { getTemperatureFromWeatherReport } from '@helpers/getTemperatureFromWeatherReport'
import type { Season } from '@models/Season'

export abstract class WeatherReport {
  private readonly baseReport: BaseWeatherReport
  private readonly dateHandler: DateHandler
  private readonly weatherIconsHandler: WeatherIconsHandler
  public readonly temperature: Temperature

  protected constructor(baseWeatherReport: BaseWeatherReport) {
    this.baseReport = baseWeatherReport
    this.dateHandler = new DateHandler(baseWeatherReport.dt * 1000)
    this.weatherIconsHandler = new WeatherIconsHandler(
      !this.isNightTimeReport,
      this.description
    )
    this.temperature = new Temperature(
      getTemperatureFromWeatherReport(baseWeatherReport)
    )
  }

  public get season(): Season {
    return this.dateHandler.getSeason()
  }

  public get weekday(): string {
    return this.dateHandler.getWeekday()
  }

  public get description(): WeatherDescription {
    const weather = this.baseReport.weather[0]
    return weather?.description ?? WeatherDescription.CLEAR_SKY
  }

  public get iconClassName(): string {
    return this.weatherIconsHandler.getIconClassName()
  }

  private get isNightTimeReport(): boolean {
    const NIGHT_TIME_START_HOUR: number = 0
    const NIGHT_TIME_END_HOUR: number = 6

    const date = new Date(this.baseReport.dt)
    const hours = date.getHours()

    return hours >= NIGHT_TIME_START_HOUR && hours < NIGHT_TIME_END_HOUR
  }
}
