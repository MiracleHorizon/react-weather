import { Response } from 'next/dist/compiled/@edge-runtime/primitives/fetch'

import { OpenWeatherEndpoint } from '@models/api/OpenWeatherEndpoint'
import { NotFoundCityException } from '@exceptions/NotFoundCityException'
import { WrongCredentialsException } from '@exceptions/WrongCredentialsException'
import {
  NOT_FOUND_STATUS,
  UNAUTHORIZED_STATUS
} from '@constants/responseStatuses'
import { OPEN_WEATHER_API, OPEN_WEATHER_BASE_ENDPOINT } from '@constants/api'
import type {
  CurrentWeatherResponse,
  WeatherForecastResponse
} from '@models/weather'
import type { Geolocation } from '@models/Geolocation'

interface Constructor {
  apiKey: string
  unitSystem: string
  city: string | null
  geolocation: Geolocation | null
  priority: Priority
}

type Priority = 'city' | 'geolocation'

export class WeatherService {
  private readonly baseUrl: string = OPEN_WEATHER_API
  private readonly apiKey: string
  private readonly unitSystem: string
  private readonly city: string | null
  private readonly geolocation: Geolocation | null
  private readonly priority: Priority

  constructor({
    apiKey,
    unitSystem,
    city,
    geolocation,
    priority
  }: Constructor) {
    this.apiKey = apiKey
    this.unitSystem = unitSystem
    this.city = city
    this.geolocation = geolocation
    this.priority = priority
  }

  public async fetchCurrentWeather(): Promise<CurrentWeatherResponse> {
    try {
      const url = this.getCurrentWeatherRequestURL()
      const response = await fetch(url, {
        next: {
          revalidate: 5 * 60
        }
      })

      if (!response.ok) {
        await this.handleResponseErrorStatus(response)
      }

      return response.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  public async fetchWeatherForecast(): Promise<WeatherForecastResponse> {
    try {
      const url = this.getWeatherForecastRequestURL()
      const response = await fetch(url, {
        next: {
          revalidate: 60 * 60
        }
      })

      if (!response.ok) {
        await this.handleResponseErrorStatus(response)
      }

      return response.json()
    } catch (err) {
      console.log(err)
      throw err
    }
  }

  private getCurrentWeatherRequestURL(): URL {
    return this.createRequestURL(OpenWeatherEndpoint.CURRENT_WEATHER)
  }

  private getWeatherForecastRequestURL(): URL {
    return this.createRequestURL(OpenWeatherEndpoint.WEATHER_FORECAST)
  }

  private createRequestURL(endpoint: string): URL {
    const url = new URL(OPEN_WEATHER_BASE_ENDPOINT + endpoint, this.baseUrl)
    const searchParams = this.getSearchParams()
    return this.setSearchParamsToURL(url, searchParams)
  }

  // TODO: Сочетание приоритетов и наличия данных
  private getSearchParams(): URLSearchParams {
    const baseParams = {
      units: this.unitSystem,
      appid: this.apiKey,
      lang: 'en'
    }

    if (this.geolocation && this.isGeolocationPriority()) {
      return new URLSearchParams({
        lat: this.geolocation.lat.toString(),
        lon: this.geolocation.lon.toString(),
        ...baseParams
      })
    }

    if (this.city && this.isCityPriority()) {
      return new URLSearchParams({
        q: this.city,
        ...baseParams
      })
    }

    if (!this.city && !this.geolocation) {
      throw new Error('Missing information about the request location')
    }

    return new URLSearchParams(baseParams)
  }

  private isGeolocationPriority(): boolean {
    return this.priority === 'geolocation'
  }

  private isCityPriority(): boolean {
    return this.priority === 'city'
  }

  private setSearchParamsToURL(url: URL, searchParams: URLSearchParams): URL {
    for (const [key, value] of searchParams) {
      url.searchParams.set(key, value)
    }
    return url
  }

  private async handleResponseErrorStatus({ status }: Response): Promise<void> {
    if (this.isNotFoundStatus(status)) {
      return Promise.reject(new NotFoundCityException())
    }

    if (this.isUnauthorizedStatus(status)) {
      return Promise.reject(new WrongCredentialsException())
    }
  }

  private isNotFoundStatus(responseStatus: number): boolean {
    return responseStatus === NOT_FOUND_STATUS
  }

  private isUnauthorizedStatus(responseStatus: number): boolean {
    return responseStatus === UNAUTHORIZED_STATUS
  }
}
