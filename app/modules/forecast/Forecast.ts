import { ForecastTimeString } from 'models/ForecastTimeString'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'
import { capitalizeString } from 'helpers/capitalizeString'

// Todo Проверить уровни доступа методов
export class Forecast {
  constructor(protected _forecast: IWeatherReport[]) {}

  public get forecast(): IWeatherReport[] {
    return this._forecast
  }

  public get forecastDateString(): string {
    return this._forecast[0].dt_txt
  }

  public get weatherState(): IWeatherReport {
    const morningSegment = this.getSegmentByTime(ForecastTimeString.MORNING)
    const middaySegment = this.getSegmentByTime(ForecastTimeString.MIDDAY)
    const lunchSegment = this.getSegmentByTime(ForecastTimeString.LUNCH)
    const eveningSegment = this.getSegmentByTime(ForecastTimeString.EVENING)

    if (middaySegment) return middaySegment
    if (lunchSegment) return lunchSegment
    if (morningSegment) return morningSegment
    if (eveningSegment) return eveningSegment

    return this._forecast[0]
  }

  public getWeatherCondition(): string {
    const weatherCondition = this.weatherState.weather[0].description

    return capitalizeString(weatherCondition)
  }

  private getSegmentByTime(
    forecastTime: ForecastTimeString
  ): IWeatherReport | null {
    const forecastSegment = this._forecast.find(({ dt_txt }) => {
      const segmentDate = new Date(dt_txt)

      return segmentDate.toLocaleDateString() === forecastTime
    })

    return forecastSegment || null
  }
}
