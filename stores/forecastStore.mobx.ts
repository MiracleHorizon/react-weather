import { makeAutoObservable, runInAction } from 'mobx'

import { DailyForecasts } from '@entities/weather/DailyForecasts'
import { WeatherForecastReport } from '@entities/weather/WeatherForecastReport'
import type { DailyForecastModel, ForecastResponse } from '@models/weather'

class ForecastStore {
  private forecastResponse: ForecastResponse | null = null
  private dailyForecasts: DailyForecasts | null = null
  private selectedDailyForecast: DailyForecastModel | null = null
  private selectedWeatherReport: WeatherForecastReport | null = null

  constructor() {
    makeAutoObservable(this)
  }

  public getSelectedDailyForecast() {
    return this.selectedDailyForecast
  }

  public initialize(forecastResponse: ForecastResponse): void {
    this.forecastResponse = forecastResponse
    // this.dailyForecasts = new DailyForecasts(forecastResponse.list)

    // const firstDailyForecast = this.dailyForecasts.getForecastsList()[0]
    // if (firstDailyForecast) this.setSelectedDailyForecast(firstDailyForecast)
  }

  public setSelectedDailyForecast(dailyForecast: DailyForecastModel): void {
    const firstDailyWeatherReport = dailyForecast.data[0]

    if (!firstDailyWeatherReport) return

    runInAction(() => {
      this.selectedDailyForecast = dailyForecast
      this.selectedWeatherReport = new WeatherForecastReport(
        firstDailyWeatherReport
      )
    })
  }

  public selectNextDailyForecast(): void {
    console.log(
      this.dailyForecasts,
      this.selectedDailyForecast,
      this.forecastResponse,
      this.selectedWeatherReport
    )
  }

  public selectPrevDailyForecast(): void {}
}

export const useForecastStore = new ForecastStore()
