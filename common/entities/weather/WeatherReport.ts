import { type BaseWeatherReport, WeatherDescription } from '@models/weather'
import { Temperature } from '@entities/Temperature'
import { DateHandler } from '@utils/DateHandler'
import { getTemperatureFromWeatherReport } from '@helpers/getTemperatureFromWeatherReport'
import { OPEN_WEATHER_TIMESTAMP_MULTIPLIER } from '@constants/api'
import type { Season } from '@models/Season'

export abstract class WeatherReport {
  private readonly baseReport: BaseWeatherReport
  protected readonly dateHandler: DateHandler
  public readonly temperature: Temperature

  protected constructor(baseWeatherReport: BaseWeatherReport) {
    this.baseReport = baseWeatherReport
    this.dateHandler = new DateHandler(
      baseWeatherReport.dt * OPEN_WEATHER_TIMESTAMP_MULTIPLIER
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
}
