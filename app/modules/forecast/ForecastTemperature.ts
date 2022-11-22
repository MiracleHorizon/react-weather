import { Forecast } from './Forecast'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'
import { getAverageNumberArrayValue } from 'helpers/getAverageNumberArrayValue'

export class ForecastTemperature extends Forecast {
  constructor(forecastDay: IWeatherReport[]) {
    super(forecastDay)
  }

  public getAverageTemperature(): number {
    return getAverageNumberArrayValue({
      array: this._forecast.map(segment => segment.main.temp),
      rounding: 'round',
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
      rounding: 'ceil',
    })
  }

  public getAverageFeelsLikeTemperature(): number {
    return getAverageNumberArrayValue({
      array: this._forecast.map(segment => segment.main.feels_like),
      rounding: 'floor',
    })
  }
}
