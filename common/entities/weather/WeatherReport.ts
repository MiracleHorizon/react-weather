import {
  type BaseWeatherReport,
  type TemperatureModel,
  WeatherDescription
} from '@models/weather'
import { DateHandler } from '@utils/DateHandler'
import { OPEN_WEATHER_TIMESTAMP_MULTIPLIER } from '@constants/api'

export abstract class WeatherReport {
  private readonly baseReport: BaseWeatherReport
  protected readonly dateHandler: DateHandler

  protected constructor(baseWeatherReport: BaseWeatherReport) {
    this.baseReport = baseWeatherReport
    this.dateHandler = new DateHandler(this.dateTimestamp)
  }

  public get dateTimestamp() {
    return this.baseReport.dt * OPEN_WEATHER_TIMESTAMP_MULTIPLIER
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

  public get description(): WeatherDescription {
    const weather = this.baseReport.weather[0]
    return weather?.description ?? WeatherDescription.CLEAR_SKY
  }
}
