import {
  type BaseWeatherReport,
  type TemperatureModel,
  WeatherDescription
} from '@models/weather'
import { DateHandler } from '@utils/DateHandler'
import { OPEN_WEATHER_TIMESTAMP_MULTIPLIER } from '@constants/api'
import type { Season } from '@models/Season'

export abstract class WeatherReport {
  private readonly baseReport: BaseWeatherReport
  protected readonly dateHandler: DateHandler

  protected constructor(baseWeatherReport: BaseWeatherReport) {
    this.baseReport = baseWeatherReport
    this.dateHandler = new DateHandler(
      baseWeatherReport.dt * OPEN_WEATHER_TIMESTAMP_MULTIPLIER
    )
  }

  public get temperature(): TemperatureModel {
    const { temp, temp_min, temp_max, feels_like } = this.baseReport.main
    return {
      temp,
      temp_min,
      temp_max,
      feels_like
    }
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
