import { makeAutoObservable, runInAction } from 'mobx'

import { WeeklyForecast } from '@entities/weather'
import type {
  DailyForecastModel,
  ForecastCity,
  WeatherForecastReportModel,
  WeatherForecastResponse
} from '@models/weather'

class ForecastStore {
  private weeklyForecast: WeeklyForecast | null = null
  private city: ForecastCity | null = null
  public selectedDailyForecast: DailyForecastModel | null = null
  public selectedWeatherReport: WeatherForecastReportModel | null = null

  constructor() {
    makeAutoObservable(this)
  }

  public initialize({ list, city }: WeatherForecastResponse): void {
    this.weeklyForecast = new WeeklyForecast(list)
    this.city = city

    const firstDailyForecast = this.weeklyForecast.getFirstDailyForecast()
    if (!firstDailyForecast) return
    this.selectedDailyForecast = firstDailyForecast

    const firstWeatherReport = firstDailyForecast.data[0]
    if (!firstWeatherReport) return
    this.selectedWeatherReport = firstWeatherReport
  }

  public getCity(): ForecastCity | null {
    return this.city
  }

  public getDailyForecasts(): DailyForecastModel[] {
    return this.weeklyForecast?.getDailyForecasts() ?? []
  }

  public isDailyForecastSelected(forecastId: string): boolean {
    return this.selectedDailyForecast?.id === forecastId
  }

  public isWeatherReportSelected(reportTimestamp: number): boolean {
    return this.selectedWeatherReport?.dt === reportTimestamp
  }

  public selectDailyForecastById(id: string): void {
    runInAction(() => {
      const dailyForecast = this.weeklyForecast?.findDailyForecastById(id)
      const firstDailyForecastWeatherReport = dailyForecast?.data[0]

      if (!dailyForecast || !firstDailyForecastWeatherReport) return

      this.selectedDailyForecast = dailyForecast
      this.selectedWeatherReport = firstDailyForecastWeatherReport
    })
  }

  public selectWeatherReportByTimestamp(timestamp: number): void {
    runInAction(() => {
      const weatherReport = this.selectedDailyForecast?.data.find(report => {
        return report.dt === timestamp
      })
      if (weatherReport) this.selectedWeatherReport = weatherReport
    })
  }
}

export const useForecastStore = new ForecastStore()
