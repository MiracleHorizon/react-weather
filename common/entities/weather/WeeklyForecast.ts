import { v4 } from 'uuid'

import type {
  DailyForecastModel,
  WeatherForecastReportModel
} from '@models/weather'

export class WeeklyForecast {
  private readonly dailyForecasts: DailyForecastModel[]

  constructor(forecastReportsList: WeatherForecastReportModel[]) {
    this.dailyForecasts =
      this.getDailyForecastsFromForecastsList(forecastReportsList)
  }

  public getDailyForecasts(): DailyForecastModel[] {
    return this.dailyForecasts
  }

  public getFirstDailyForecast(): DailyForecastModel | null {
    const firstDailyForecast = this.dailyForecasts[0]
    return firstDailyForecast ?? null
  }

  public findDailyForecastById(id: string): DailyForecastModel | null {
    const dailyForecast = this.dailyForecasts.find(dailyForecast => {
      return dailyForecast.id === id
    })
    return dailyForecast ?? null
  }

  private getDailyForecastsFromForecastsList(
    forecastReportsList: WeatherForecastReportModel[]
  ): DailyForecastModel[] {
    const forecastsDates = [
      ...new Set(forecastReportsList.map(({ dt_txt }) => this.getDate(dt_txt)))
    ]

    const dailyForecastsData = forecastsDates.map(date => {
      const forecastReports: WeatherForecastReportModel[] = []

      for (const forecast of forecastReportsList) {
        const forecastDate = this.getDate(forecast.dt_txt)
        if (forecastDate === date) forecastReports.push(forecast)
      }

      return forecastReports
    })

    return dailyForecastsData.map(data => ({ id: v4(), data }))
  }

  private getDate(dateValue: string | number): number {
    return new Date(dateValue).getDate()
  }
}
