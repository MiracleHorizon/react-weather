import { IDailyForecast } from 'models/weather/IDailyForecast'

export class DailyForecasts {
  private readonly _dailyForecasts: IDailyForecast[] = []
  private _selectedDailyForecastIdentifier: number = 0

  constructor(
    forecastsList: IDailyForecast[],
    selectedDailyForecastIdentifier: number
  ) {
    this._dailyForecasts = forecastsList
    this._selectedDailyForecastIdentifier = selectedDailyForecastIdentifier
  }

  public get dailyForecasts() {
    return this._dailyForecasts
  }

  private get selectedDailyForecastIndex(): number {
    return this._dailyForecasts
      .map(({ identifier }) => identifier)
      .indexOf(this._selectedDailyForecastIdentifier)
  }

  public get nextDailyForecast(): IDailyForecast {
    let index = this.selectedDailyForecastIndex + 1
    if (index === this._dailyForecasts.length) index = 0

    const dailyForecast = this._dailyForecasts[index]
    this.selectedDailyForecastIdentifier = dailyForecast.identifier

    return dailyForecast
  }

  public get prevDailyForecast(): IDailyForecast {
    let index = this.selectedDailyForecastIndex - 1
    if (index < 0) index = this._dailyForecasts.length - 1

    const dailyForecast = this._dailyForecasts[index]
    this.selectedDailyForecastIdentifier = dailyForecast.identifier

    return dailyForecast
  }

  public set selectedDailyForecastIdentifier(value: number) {
    this._selectedDailyForecastIdentifier = value
  }
}
