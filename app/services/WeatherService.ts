import axios from 'axios'

import { IFiveDayForecastResponse } from 'models/api/responses/IFiveDayForecastResponse'

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})

export class WeatherService {
  public static async fetchFiveDayForecast(): Promise<IFiveDayForecastResponse> {
    try {
      // Получение прогноза погода на ближайшие пять дней с данными на каждые три часа.
      const url = `/forecast?q=Moscow&units=metric&appid=${process.env.API_KEY}`
      const { data } = await api.get<IFiveDayForecastResponse>(url)

      return data
    } catch (e) {
      throw new Error('err') // Todo Написать эксепшн
    }
  }
}

// TODO Фабрика сервисов
