import { WeatherDescription } from '@models/weather'

// NOTE: http://erikflowers.github.io/weather-icons
export class WeatherIconsHandler {
  constructor(
    private readonly isDay: boolean,
    private readonly weatherDescription: WeatherDescription
  ) {}

  public getIconClassName(): string {
    switch (this.weatherDescription) {
      case WeatherDescription.CLEAR_SKY:
        return this.clearSkyIcon
      case WeatherDescription.LIGHT_RAIN:
        return this.lightRainIcon
      case WeatherDescription.RAIN:
        return this.rainIcon
      case WeatherDescription.SHOWER_RAIN:
        return this.showerRainIcon
      case WeatherDescription.MODERATE_RAIN:
        return this.moderateRainIcon
      case WeatherDescription.THUNDERSTORM:
        return this.thunderstormIcon
      case WeatherDescription.LIGHT_SHOW:
        return this.lightSnowIcon
      case WeatherDescription.SNOW:
        return this.snowIcon
      case WeatherDescription.MIST:
        return this.mistIcon
      case WeatherDescription.HAZE:
        return this.hazeIcon
      case WeatherDescription.FEW_CLOUDS:
        return this.fewCloudsIcon
      case WeatherDescription.SCATTERED_CLOUDS:
        return this.cloudsIcon
      case WeatherDescription.BROKEN_CLOUDS:
        return this.cloudsIcon
      case WeatherDescription.OVERCAST_CLOUDS:
        return this.overcastCloudsIcon
      default:
        return this.errorIcon
    }
  }

  private get fewCloudsIcon(): string {
    return `wi-${this.isDay ? 'day-cloudy' : 'night-alt-cloudy'}`
  }

  private get clearSkyIcon(): string {
    return `wi-${this.isDay ? 'day-sunny' : 'night-clear'}`
  }

  private get cloudsIcon(): string {
    return 'wi-cloud'
  }

  private get overcastCloudsIcon(): string {
    return `wi-${this.isDay ? 'day-cloudy' : 'night-alt-cloudy'}`
  }

  private get rainIcon(): string {
    return `wi-${this.isDay ? 'day-rain' : 'night-alt-rain'}`
  }

  private get lightRainIcon(): string {
    return 'wi-rain'
  }

  private get showerRainIcon(): string {
    return `wi-${this.isDay ? 'day-showers' : 'night-alt-showers'}`
  }

  private get moderateRainIcon(): string {
    return `wi-${this.isDay ? 'day-storm-showers' : 'storm-showers'}`
  }

  private get thunderstormIcon(): string {
    return `wi-${this.isDay ? 'day-thunderstorm' : 'night-thunderstorm'}`
  }

  private get snowIcon(): string {
    return 'wi-snowflake-cold'
  }

  private get lightSnowIcon(): string {
    return 'wi-snow'
  }

  private get hazeIcon(): string {
    return `wi-${this.isDay ? 'day-haze' : 'night-fog'}`
  }

  private get mistIcon(): string {
    return `wi-${this.isDay ? 'day-fog' : 'night-fog'}`
  }

  private get errorIcon(): string {
    return 'wi-alien'
  }
}
