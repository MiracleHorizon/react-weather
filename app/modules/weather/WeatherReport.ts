import { WeatherUnitsPostfix } from 'modules/WeatherUnitsPostfix'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'
import { WeatherCondition } from 'models/WeatherCondition'

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

  public get isDay() {
    return this.hoursTime >= 0 && this.hoursTime <= 6
  }

  public get weatherCondition() {
    return this._weatherReport.weather[0].description
  }

  public get temperature() {
    const value = this._weatherReport.main.temp.toFixed(1).replace('.0', '')

    return value.toString().split('.').join(',')
  }

  public get weatherIconClassName(): string {
    switch (this.weatherCondition) {
      case WeatherCondition.CLEAR_SKY:
        return this.isDay ? 'wi-day-sunny' : 'wi-night-clear'
      case WeatherCondition.FEW_CLOUDS:
        return this.isDay ? 'wi-day-cloudy' : 'wi-night-alt-cloudy'
      case WeatherCondition.SCATTERED_CLOUDS:
        return 'wi-cloud'
      case WeatherCondition.BROKEN_CLOUDS:
        return 'wi-cloudy'
      case WeatherCondition.OVERCAST_CLOUDS:
        return 'wi-cloudy'
      case WeatherCondition.RAIN:
        return this.isDay ? 'wi-day-rain' : 'wi-night-alt-rain'
      case WeatherCondition.LIGHT_RAIN:
        return 'wi-rain'
      case WeatherCondition.SHOWER_RAIN:
        return this.isDay ? 'wi-day-showers' : 'wi-night-alt-showers'
      case WeatherCondition.MODERATE_RAIN:
        return this.isDay ? 'wi-day-storm-showers' : 'wi-storm-showers'
      case WeatherCondition.THUNDERSTORM:
        return this.isDay ? 'wi-day-thunderstorm' : 'wi-night-thunderstorm'
      case WeatherCondition.SNOW:
        return 'wi-snowflake-cold'
      case WeatherCondition.LIGHT_SHOW:
        return 'wi-snow'
      case WeatherCondition.MIST:
        return this.isDay ? 'wi-day-fog' : 'wi-night-fog'
      default:
        return 'wi-alien'
    }
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
