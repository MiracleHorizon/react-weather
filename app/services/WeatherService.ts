import axios, { AxiosError } from 'axios'

import AppStore from 'stores/AppStore'
import { ICurrentWeatherReport } from 'models/weather/reports/ICurrentWeatherReport'
import { IFiveDayForecastResponse } from 'models/api/IFiveDayForecastResponse'
import { OPEN_WEATHER_API_BASE_URL } from 'utils/constants/api'

const api = axios.create({
  baseURL: OPEN_WEATHER_API_BASE_URL
})

// lat={lat}&lon={lon}
export class WeatherService {
  private static _city = `q=${AppStore.city}`
  private static _units = `units=${AppStore.unitsSystem.toLowerCase()}`
  private static _apiKey = `appid=${process.env.API_KEY}`
  private static _baseParams = `${this._city}&${this._units}&${this._apiKey}`

  public static async fetchCurrentWeather(): Promise<ICurrentWeatherReport> {
    try {
      // Получение данных о текущей погоде.
      const url = `/weather?${this._baseParams}`
      const { data } = await api.get<ICurrentWeatherReport>(url)

      return data
    } catch (e) {
      throw new Error('err') // todo написать эксепшн
    }
  }

  public static async fetchFiveDayForecast(): Promise<IFiveDayForecastResponse | null> {
    try {
      // Получение прогноза погода на ближайшие пять дней с данными на каждые три часа.
      const url = `/forecast?${this._baseParams}`
      const { data } = await api.get<IFiveDayForecastResponse>(url)

      return data
    } catch (e) {
      const { response, message } = e as unknown as AxiosError

      // if (response?.status && response.status === 404) {
      //   throw new Error('Локация не найдена.')
      // } else {
      //   throw new Error(message)
      // }
      return null
    }
  }
}
