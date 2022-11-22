import { Forecast } from './Forecast'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'
import { getAverageNumberArrayValue } from 'helpers/getAverageNumberArrayValue'

export class ForecastWeather extends Forecast {
  constructor(forecastDay: IWeatherReport[]) {
    super(forecastDay)
  }

  public getAverageHumidity(): number {
    return getAverageNumberArrayValue({
      array: this._forecast.map(segment => segment.main.humidity),
      rounding: 'floor',
    })
  }

  public getAveragePressure(): number {
    const averagePressure = getAverageNumberArrayValue({
      array: this._forecast.map(segment => segment.main.pressure),
      rounding: 'floor',
    })

    return averagePressure
  }

  public getAverageProbabilityOfPrecipitation(): number {
    // Поле "pop" - вероятность осадков от 0 до 1.
    // Число умножается на 100 для получения представления в процентах.
    return getAverageNumberArrayValue({
      array: this._forecast.map(segment => segment.pop * 100),
      rounding: 'ceil',
    })
  }
}
