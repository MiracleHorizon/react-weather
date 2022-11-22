import { Wind } from '../Wind'
import { Forecast } from './Forecast'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'
import { getRepeatCountFromArray } from 'helpers/getRepeatCountFromArray'
import { getAverageNumberArrayValue } from 'helpers/getAverageNumberArrayValue'

export class ForecastWind extends Forecast {
  constructor(forecastDay: IWeatherReport[]) {
    super(forecastDay)
  }

  public getAverageWindSpeed(): string {
    const speedValues = this._forecast.map(segment => {
      // return Wind.getWindSpeed(segment.wind.speed)
      return segment.wind.speed
    })

    return getAverageNumberArrayValue({
      array: speedValues,
      rounding: 'default',
    }).toFixed(2)
  }

  public getAverageWindGust(): string {
    const gustValues = this._forecast.map(segment => {
      // return Wind.getWindGustsSpeed(segment.wind.gust)
      return segment.wind.gust
    })

    return getAverageNumberArrayValue({
      array: gustValues,
      rounding: 'default',
    }).toFixed(2)
  }

  public getPrevailingWindDirection(): string {
    const windObjects = this._forecast.map(segment => segment.wind)

    const sortedByCountWindDirection = getRepeatCountFromArray({
      array: windObjects,
      field: 'deg',
    })

    return Wind.getWindDirection(+sortedByCountWindDirection[0][0])
  }
}
