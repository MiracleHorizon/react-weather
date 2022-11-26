import { WeatherCondition } from 'models/enums/WeatherCondition'

export class WeatherIconsHandler {
  constructor(
    private _isDay: boolean,
    private _weatherCondition: WeatherCondition
  ) {}

  public getIconClassName() {
    switch (this._weatherCondition) {
      case WeatherCondition.CLEAR_SKY:
        return this.clearSkyIcon
      case WeatherCondition.LIGHT_RAIN:
        return this.lightRainIcon
      case WeatherCondition.RAIN:
        return this.rainIcon
      case WeatherCondition.SHOWER_RAIN:
        return this.showerRainIcon
      case WeatherCondition.MODERATE_RAIN:
        return this.moderateRainIcon
      case WeatherCondition.THUNDERSTORM:
        return this.thunderstormIcon
      case WeatherCondition.LIGHT_SHOW:
        return this.lightSnowIcon
      case WeatherCondition.SNOW:
        return this.snowIcon
      case WeatherCondition.MIST:
        return this.mistIcon
      case WeatherCondition.FEW_CLOUDS:
        return this.fewCloudsIcon
      case WeatherCondition.SCATTERED_CLOUDS:
        return this.cloudsIcon
      case WeatherCondition.BROKEN_CLOUDS:
        return this.cloudsIcon
      case WeatherCondition.OVERCAST_CLOUDS:
        return this.cloudsIcon
      default:
        return this.errorIcon
    }
  }

  private get fewCloudsIcon() {
    return `wi-${this._isDay ? 'day-cloudy' : 'night-alt-cloudy'}`
  }

  private get clearSkyIcon() {
    return `wi-${this._isDay ? 'day-sunny' : 'night-clear'}`
  }

  private get cloudsIcon() {
    return 'wi-cloud'
  }

  private get rainIcon() {
    return `wi-${this._isDay ? 'day-rain' : 'night-alt-rain'}`
  }

  private get lightRainIcon() {
    return 'wi-rain'
  }

  private get showerRainIcon() {
    return `wi-${this._isDay ? 'day-showers' : 'night-alt-showers'}`
  }

  private get moderateRainIcon() {
    return `wi-${this._isDay ? 'day-storm-showers' : 'wi-storm-showers'}`
  }

  private get thunderstormIcon() {
    return `wi-${this._isDay ? 'day-thunderstorm' : 'night-thunderstorm'}`
  }

  private get snowIcon() {
    return 'wi-snowflake-cold'
  }

  private get lightSnowIcon() {
    return 'wi-snow'
  }

  private get mistIcon() {
    return `wi-${this._isDay ? 'day-fog' : 'night-fog'}`
  }

  private get errorIcon() {
    return 'we-alien'
  }
}
