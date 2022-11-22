import { WeatherUnitsPostfix } from 'modules/WeatherUnitsPostfix'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'

export class WeatherReport {
  constructor(
    private _weatherReport: IWeatherReport,
    private _unitsPostfix = WeatherUnitsPostfix
  ) {}

  public get hoursTime() {
    const date = new Date(this._weatherReport.dt_txt)

    return date.getHours()
  }

  public get hoursTimeString() {
    const date = new Date(this._weatherReport.dt_txt)
    const hours = date.getHours()

    return (hours > 9 ? hours : '0' + hours) + ':00'
  }

  public get cloudsState() {
    return this._weatherReport.weather[0].description
  }

  public get temperature() {
    const value = this._weatherReport.main.temp.toFixed(1).replace('.0', '')

    return value.toString().split('.').join(',')
  }

  public getAdditionalInfo() {
    return [
      {
        title: 'Wind',
        value: this._weatherReport.wind.speed,
        postfix: this._unitsPostfix.getWindSpeedUnitsPostfix(),
      },
      {
        title: 'Visibility',
        value: this._weatherReport.visibility / 1000, // visibility - дальности видимости в метрах.
        postfix: this._unitsPostfix.getVisibilityUnitsPostfix(),
      },
      {
        title: 'Pressure',
        value: this._weatherReport.main.pressure,
        postfix: this._unitsPostfix.getPressureUnitsPostfix(),
      },
      {
        title: 'Humidity',
        value: this._weatherReport.main.humidity,
        postfix: '%',
      },
    ]
  }
}
