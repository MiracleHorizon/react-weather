import capitalize from 'lodash.capitalize'

import { ForecastTimeString } from 'models/ForecastTimeString'
import { IForecastSegment } from 'models/weather/forecast/IForecastSegment'

// Todo Проверить уровни доступа методов
export class Forecast {
  constructor(protected _forecast: IForecastSegment[]) {}

  public get forecast(): IForecastSegment[] {
    return this._forecast
  }

  public get forecastDateString(): string {
    return this._forecast[0].dt_txt
  }

  public get weatherState(): IForecastSegment {
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

  public getCloudsState(): string {
    const cloudsState = this.weatherState.weather[0].description

    return cloudsState
      .split(' ')
      .map(word => capitalize(word))
      .join(' ')
  }

  private getSegmentByTime(
    forecastTime: ForecastTimeString
  ): IForecastSegment | null {
    const forecastSegment = this._forecast.find(({ dt_txt }) => {
      const segmentDate = new Date(dt_txt)

      return segmentDate.toLocaleDateString() === forecastTime
    })

    return forecastSegment || null
  }
}
