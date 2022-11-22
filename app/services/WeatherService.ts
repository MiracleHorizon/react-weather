import axios from 'axios'

import AppStore from 'stores/AppStore'
import { ICurrentWeatherResponse } from 'models/api/responses/ICurrentWeatherResponse'
import { IFiveDayForecastResponse } from 'models/api/responses/IFiveDayForecastResponse'

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})

export class WeatherService {
  private static _city = `q=${AppStore.city}`
  private static _units = `units=${AppStore.unitsSystem.toLowerCase()}`
  private static _apiKey = `appid=${process.env.API_KEY}`
  private static _baseParams = `${this._city}&${this._units}&${this._apiKey}`

  public static async fetchCurrentWeather(): Promise<ICurrentWeatherResponse> {
    try {
      // Получение данных о текущей погоде.
      const url = `/weather?${this._baseParams}`
      const { data } = await api.get<ICurrentWeatherResponse>(url)

      return data
    } catch (e) {
      throw new Error('err') // todo написать эксепшн
    }
  }

  public static async fetchFiveDayForecast(): Promise<IFiveDayForecastResponse> {
    try {
      // Получение прогноза погода на ближайшие пять дней с данными на каждые три часа.
      const url = `/forecast?${this._baseParams}`
      const { data } = await api.get<IFiveDayForecastResponse>(url)

      return data
    } catch (e) {
      throw new Error('err') // Todo Написать эксепшн
    }
  }
}
