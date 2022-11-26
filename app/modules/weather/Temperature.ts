import { ITemperature } from 'models/weather/ITemperature'

export class Temperature {
  constructor(private _temperatureObject: ITemperature) {}

  public get temperatureValue() {
    return this.getFormattedTemperatureStringValue(this._temperatureObject.temp)
  }

  public get additionalTemperatureInfo() {
    const { temp, ...additionalInfo } = this._temperatureObject
    const [min, max, feelsLike] = Object.values(additionalInfo).map(value => {
      return this.getFormattedTemperatureStringValue(value)
    })

    return [
      { title: 'Min', value: min },
      { title: 'Max', value: max },
      { title: 'Feels like', value: feelsLike },
    ]
  }

  private getFormattedTemperatureStringValue(temperatureValue: number): string {
    return temperatureValue.toFixed(1).replace('.0', '').split('.').join(',')
  }
}
