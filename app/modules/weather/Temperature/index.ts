import { ITemperature } from 'models/weather/ITemperature'
import { getFixedNumberValue } from 'helpers/getFixedNumberValue'

// todo добавить ограничение на возможную температуру.
export class Temperature {
  constructor(private _temperatureObject: ITemperature) {}

  public get value() {
    return getFixedNumberValue(this._temperatureObject.temp)
  }

  public get maximum() {
    return getFixedNumberValue(this._temperatureObject.max)
  }

  public get minimum() {
    return getFixedNumberValue(this._temperatureObject.min)
  }

  public get feelsLike() {
    return getFixedNumberValue(this._temperatureObject.feelsLike)
  }

  public get additionalInfoArray() {
    return [
      { title: 'Min', value: this.minimum },
      { title: 'Max', value: this.maximum },
      { title: 'Feels like', value: this.feelsLike },
    ]
  }
}
