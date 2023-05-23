import type { Response } from 'next/dist/compiled/@edge-runtime/primitives/fetch'

import { OpenWeatherEndpoint } from '@models/api/OpenWeatherEndpoint'
import { NotFoundCityException } from '@exceptions/NotFoundCityException'
import { WrongCredentialsException } from '@exceptions/WrongCredentialsException'
import { OPEN_WEATHER_API, OPEN_WEATHER_BASE_ENDPOINT } from '@constants/api'
import {
  NOT_FOUND_STATUS,
  UNAUTHORIZED_STATUS
} from '@constants/responseStatuses'
import type { CurrentWeatherResponse, ForecastResponse } from '@models/weather'

interface Constructor {
  apiKey: Readonly<string>
  unitSystem: Readonly<string>
  city: Readonly<string>
}

export class WeatherService {
  private readonly baseUrl: string = OPEN_WEATHER_API
  private readonly apiKey: string
  private readonly unitSystem: string
  private readonly city: string

  constructor({ city, apiKey, unitSystem }: Constructor) {
    this.apiKey = apiKey
    this.unitSystem = unitSystem
    this.city = city
  }

  public async fetchCurrentWeather(): Promise<CurrentWeatherResponse> {
    try {
      const url = this.getCurrentWeatherRequestURL()
      const response = await fetch(url, {
        next: {
          revalidate: 3 * 60
        }
      })

      if (!response.ok) {
        await this.handleResponseError(response)
      }

      return response.json()
    } catch (err) {
      throw err
    }
  }

  public async fetchWeatherForecast(): Promise<ForecastResponse> {
    try {
      const url = this.getWeatherForecastRequestURL()
      const response = await fetch(url, {
        next: {
          revalidate: 60 * 60
        }
      })

      if (!response.ok) {
        await this.handleResponseError(response)
      }

      return response.json()
    } catch (err) {
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

  private getSearchParams(): URLSearchParams {
    return new URLSearchParams({
      q: this.city,
      units: this.unitSystem,
      appid: this.apiKey
    })
  }

  private setSearchParamsToURL(url: URL, searchParams: URLSearchParams): URL {
    for (const [key, value] of searchParams) {
      url.searchParams.set(key, value)
    }
    return url
  }

  private async handleResponseError({ status }: Response): Promise<void> {
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
