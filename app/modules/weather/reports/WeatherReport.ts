import { Temperature } from 'modules/weather/Temperature'
import { WeatherIconsHandler } from 'modules/weather/handlers/WeatherIconsHandler'
import { WeatherUnitsPostfixHandler } from 'modules/weather/handlers/WeatherUnitsPostfixHandler'
import { getTempObjectFromMainWeatherInfo } from 'helpers/getTempObjectFromMainWeatherInfo'
import { IWeatherReport } from 'models/weather/reports/IWeatherReport'

export class WeatherReport {
  private readonly _report = {} as IWeatherReport
  private readonly _unitsPostfixHandler = WeatherUnitsPostfixHandler
  protected _temperature = {} as Temperature
  protected _iconsHandler = {} as WeatherIconsHandler

  constructor(report: IWeatherReport) {
    this._report = report
    this._temperature = new Temperature(
      getTempObjectFromMainWeatherInfo(report.main)
    )
    this._iconsHandler = new WeatherIconsHandler(
      !this.isNightTimeReport,
      this.weatherCondition
    )
  }

  public get iconClassName() {
    return this._iconsHandler.getIconClassName()
  }

  public get temperature() {
    return this._temperature
  }

  public get weatherCondition() {
    return this._report.weather[0].description
  }

  public get hoursTime() {
    const date = new Date(this._report.dt)

    return date.getHours()
  }

  public get hoursTimeString() {
    const hours = this.hoursTime

    return (hours > 9 ? hours : '0' + hours) + ':00'
  }

  public get isNightTimeReport() {
    const hours = this.hoursTime

    return hours >= 0 && hours < 6
  }

  public get additionalInfoArray() {
    const { pressure, humidity } = this._report.main
    const { speed: windSpeed } = this._report.wind
    const { visibility } = this._report

    return [
      {
        title: 'Wind',
        value: windSpeed,
        postfix: this._unitsPostfixHandler.getWindSpeedUnitsPostfix(),
      },
      {
        title: 'Visibility',
        value: visibility,
        postfix: this._unitsPostfixHandler.getVisibilityUnitsPostfix(),
      },
      {
        title: 'Pressure',
        value: pressure,
        postfix: this._unitsPostfixHandler.getPressureUnitsPostfix(),
      },
      {
        title: 'Humidity',
        value: humidity,
        postfix: '%',
      },
    ]
  }
}
