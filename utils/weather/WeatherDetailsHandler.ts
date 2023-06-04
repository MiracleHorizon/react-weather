import { UnitSystem } from '@models/UnitSystem'
import { AtmosphericPressureConverter } from '@utils/weather/AtmosphericPressureConverter'
import { UnitSystemPostfixesHandler } from '@utils/weather/UnitSystemPostfixesHandler'
import { convertWindDirectionDegreesToCardinal } from '@helpers/convertWindDirectionDegreesToCardinal'
import type {
  BaseWeatherReport,
  Clouds,
  RecentPrecipitation,
  Wind
} from '@models/weather'

export interface WeatherDetailsItem {
  title: string
  value: string | number
  postfix?: string
  iconClassName?: string
}

interface Constructor {
  weatherReport: BaseWeatherReport
  clouds: Clouds
  wind: Wind
  unitSystem: UnitSystem
}

export class WeatherDetailsHandler {
  private readonly weatherReport: BaseWeatherReport
  private readonly clouds: Clouds
  private readonly wind: Wind
  private readonly unitSystem: UnitSystem
  private readonly unitSystemPostfixesHandler: UnitSystemPostfixesHandler

  constructor({ weatherReport, clouds, wind, unitSystem }: Constructor) {
    this.weatherReport = weatherReport
    this.clouds = clouds
    this.wind = wind
    this.unitSystem = unitSystem
    this.unitSystemPostfixesHandler = new UnitSystemPostfixesHandler(unitSystem)
  }

  public getDetailsList(): WeatherDetailsItem[] {
    const detailsList = [
      this.getCloudsDetails(),
      this.getPressureDetails(),
      this.getHumidityDetails(),
      this.getVisibilityDetails(),
      this.getWindDetails()
    ]

    const windGusts = this.wind.gust
    if (windGusts) {
      detailsList.push(this.getWindGustsDetails(windGusts))
    }

    const rain = this.weatherReport.rain
    if (rain && (rain?.['1h'] || rain?.['3h'])) {
      detailsList.push(this.getRainDetails(rain))
    }

    const show = this.weatherReport.show
    if (show && (show?.['1h'] || show?.['3h'])) {
      detailsList.push(this.getShowDetails(show))
    }

    return detailsList
  }

  private getCloudsDetails(): WeatherDetailsItem {
    return {
      title: 'Cloudy',
      value: this.clouds.all,
      postfix: '%',
      iconClassName:
        'wi-cloud wi-fw w-[15px] translate-x-[-1px] transform text-[17px]'
    }
  }

  private getPressureDetails(): WeatherDetailsItem {
    const pressure = this.weatherReport.main.pressure
    let pressureDetails

    switch (this.unitSystem) {
      case UnitSystem.DEFAULT:
        pressureDetails = {
          value: pressure,
          postfix: ' hPa'
        }
        break
      case UnitSystem.IMPERIAL:
        pressureDetails = {
          value: pressure,
          postfix: ' hPa'
        }
        break
      case UnitSystem.METRIC:
        pressureDetails = {
          value:
            AtmosphericPressureConverter.convertHectopascalsToMmHg(pressure),
          postfix: ' mmHg'
        }
        break
    }

    return {
      title: 'Pressure',
      iconClassName: 'wi-barometer transform translate-y-[1px]',
      ...pressureDetails
    }
  }

  private getHumidityDetails(): WeatherDetailsItem {
    return {
      title: 'Humidity',
      value: this.weatherReport.main.humidity,
      postfix: '%',
      iconClassName: 'wi-humidity'
    }
  }

  // TODO: Unit system
  private getVisibilityDetails(): WeatherDetailsItem {
    // NOTE: OpenWeatherAPI возвращает значение видимости в метрах
    const MAX_VISIBILITY_VALUE: number = 10000
    const visibility = this.weatherReport.visibility
    const visibilityValue = Math.floor(visibility / 1000)

    return {
      title: 'Visibility',
      value: visibilityValue,
      postfix: visibility >= MAX_VISIBILITY_VALUE ? ' km+' : ' km',
      iconClassName: 'wi-smoke transform translate-y-[2px]'
    }
  }

  private getWindDetails(): WeatherDetailsItem {
    const windSpeedPostfix = this.unitSystemPostfixesHandler.getSpeedPostfix()

    return {
      title: 'Wind',
      value: this.wind.speed.toFixed(1).replace('.0', ''),
      postfix: ` ${windSpeedPostfix}, ${convertWindDirectionDegreesToCardinal(
        this.wind.deg
      )}`,
      iconClassName: 'wi-dust transform translate-y-[2px]'
    }
  }

  private getWindGustsDetails(gusts: number): WeatherDetailsItem {
    const windSpeedPostfix = this.unitSystemPostfixesHandler.getSpeedPostfix()

    return {
      title: 'Wind Gusts',
      value: gusts.toFixed(1).replace('.0', ''),
      postfix: ` ${windSpeedPostfix}`,
      iconClassName: 'wi-sandstorm transform translate-y-[2px]'
    }
  }

  private getRainDetails(rain: RecentPrecipitation): WeatherDetailsItem {
    const value = rain?.['1h'] ? rain['1h'] : rain?.['3h'] ? rain['3h'] : 0

    return {
      title: 'Rain',
      value,
      postfix: ' mm',
      iconClassName: 'wi-rain wi-fw w-[20px] text-[18px]'
    }
  }

  private getShowDetails(show: RecentPrecipitation): WeatherDetailsItem {
    const value = show?.['1h'] ? show['1h'] : show?.['3h'] ? show['3h'] : 0

    return {
      title: 'Show',
      value,
      postfix: ' mm',
      iconClassName:
        'wi-snowflake-cold wi-fw w-[20px] transform translate-y-[2px]'
    }
  }
}
