import type { DailyForecastModel } from '@models/weather'

export class DailyForecasts {
  constructor(public readonly forecastsList: DailyForecastModel[]) {}

  public getDailyForecasts() {}
}
