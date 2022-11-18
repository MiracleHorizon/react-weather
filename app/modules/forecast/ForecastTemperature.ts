import { Forecast } from './Forecast'
import { IForecastSegment } from 'models/weather/forecast/IForecastSegment'
import { getAverageNumberArrayValue } from 'helpers/getAverageNumberArrayValue'

export class ForecastTemperature extends Forecast {
  constructor(lists: IForecastSegment[]) {
    super(lists)
  }

  public getAverageTemperature(): number {
    return getAverageNumberArrayValue({
      array: this._forecast.map(segment => segment.main.temp),
      rounding: 'floor',
    })
  }

  public getAverageMinTemperature(): number {
    return getAverageNumberArrayValue({
      array: this._forecast.map(segment => segment.main.temp_min),
      rounding: 'floor',
    })
  }

  public getAverageMaxTemperature(): number {
    return getAverageNumberArrayValue({
      array: this._forecast.map(segment => segment.main.temp_max),
      rounding: 'floor',
    })
  }

  public getAverageFeelsLikeTemperature(): number {
    return getAverageNumberArrayValue({
      array: this._forecast.map(segment => segment.main.feels_like),
      rounding: 'floor',
    })
  }
}
