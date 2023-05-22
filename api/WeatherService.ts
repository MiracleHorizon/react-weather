import { UnitSystem } from '@models/UnitSystem'
import { OpenWeatherEndpoint } from '@models/api/OpenWeatherEndpoint'
import { NotFoundCityException } from '@entities/exceptions/NotFoundCityException'
import { API_KEY, OPEN_WEATHER_API } from '@constants/api'
import type { CurrentWeatherResponse, ForecastResponse } from '@models/weather'

interface Constructor {
  city: Readonly<string | null>
  unitSystem: Readonly<string | null>
}

export class WeatherService {
  private readonly baseUrl: string = OPEN_WEATHER_API
  private readonly city: string | null
  private readonly unitSystem: string | null

  constructor({ city, unitSystem }: Constructor) {
    this.city = city
    this.unitSystem = unitSystem
  }

  public async fetchCurrentWeather(): Promise<CurrentWeatherResponse> {
    try {
      const response = await fetch(this.currentWeatherRequestUrl, {
        method: 'GET',
        cache: 'default',
        next: {
          revalidate: 3 * 60
        }
      })

      if (response.status === 404) {
        return Promise.reject(new NotFoundCityException())
      }

      return response.json()
    } catch (e) {
      throw e
    }
  }

  public async fetchWeatherForecast(): Promise<ForecastResponse> {
    try {
      const response = await fetch(this.weatherForecastRequestUrl, {
        method: 'GET',
        cache: 'default',
        next: {
          revalidate: 60 * 60
        }
      })

      return response.json()
    } catch (e) {
      throw e
    }
  }

  private get currentWeatherRequestUrl(): string {
    return this.createRequestUrl(OpenWeatherEndpoint.CURRENT_WEATHER)
  }

  private get weatherForecastRequestUrl(): string {
    return this.createRequestUrl(OpenWeatherEndpoint.WEATHER_FORECAST)
  }

  private createRequestUrl(endpoint: string): string {
    return this.baseUrl + endpoint + this.getRequestQuery()
  }

  private getRequestQuery(): string {
    return `?${this.getCityQuery()}&${this.getUnitsQuery()}&${this.getApiKeyQuery()}`
  }

  private getCityQuery(): string {
    const city = this.city ?? 'Moscow'
    return 'q=' + city
  }

  private getUnitsQuery(): string {
    const unitSystem = this.unitSystem ?? UnitSystem.METRIC
    return 'units=' + unitSystem
  }

  private getApiKeyQuery(): string {
    return API_KEY ? 'appid=' + API_KEY : ''
  }
}
