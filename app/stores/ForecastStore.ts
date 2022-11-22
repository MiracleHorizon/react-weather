import { makeAutoObservable } from 'mobx'

import { IFiveDayForecastResponse } from 'models/api/responses/IFiveDayForecastResponse'
import { getForecastDaysFromForecastsList } from 'helpers/getForecastDaysFromForecastsList'
import { getEvenForecastReports } from 'helpers/getEvenForecastReports'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'
import { IDailyForecast } from 'types/weather'

class ForecastStore {
  private _forecast: IFiveDayForecastResponse = {} as IFiveDayForecastResponse //todo переработать
  private _selectedDailyForecast: IDailyForecast | null = null
  private _selectedDailyForecastReport: IWeatherReport | null = null

  constructor() {
    makeAutoObservable(this)
  }

  public get forecastDays() {
    return getForecastDaysFromForecastsList(this._forecast.list)
  }

  public get selectedDailyForecast() {
    if (this._selectedDailyForecast) {
      return this._selectedDailyForecast
    }

    throw new Error('Error') // todo написать экспешн
  }

  public get evenSelectedDailyForecastReports() {
    return getEvenForecastReports(this.selectedDailyForecast)
  }

  public get selectedDailyForecastReport() {
    if (this._selectedDailyForecastReport) {
      return this._selectedDailyForecastReport
    }

    throw new Error('Error') // todo написать экспешн
  }

  public get location() {
    const { name, country } = this._forecast.city

    return {
      city: name,
      countryCode: country,
    }
  }

  public set forecast(forecastResponse: IFiveDayForecastResponse) {
    this._forecast = forecastResponse
  }

  public setSelectedDailyForecast(dailyForecast: IDailyForecast) {
    this._selectedDailyForecast = dailyForecast
  }

  public setSelectedDailyForecastReport(dailyForecastReport: IWeatherReport) {
    this._selectedDailyForecastReport = dailyForecastReport
  }
}

export default new ForecastStore()
