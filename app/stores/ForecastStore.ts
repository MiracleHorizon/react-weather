import { makeAutoObservable } from 'mobx'

import { IFiveDayForecastResponse } from 'models/api/IFiveDayForecastResponse'
import { getForecastDaysFromForecastsList } from 'helpers/getForecastDaysFromForecastsList'
import { getEvenArrayElements } from 'helpers/getEvenArrayElements'
import { IForecastWeatherReport } from 'models/weather/reports/IForecastWeatherReport'
import { IDailyForecast } from 'models/weather/IDailyForecast'

class ForecastStore {
  private _forecast: IFiveDayForecastResponse = {} as IFiveDayForecastResponse //todo переработать
  private _selectedDailyForecast: IDailyForecast | null = null
  private _selectedDailyForecastReport: IForecastWeatherReport | null = null

  constructor() {
    makeAutoObservable(this)
  }

  public get forecastDays() {
    return getForecastDaysFromForecastsList(this._forecast.list)
  }

  public get location() {
    const { name, country } = this._forecast.city

    return {
      city: name,
      countryCode: country,
    }
  }

  public get selectedDailyForecast() {
    if (this._selectedDailyForecast) {
      return this._selectedDailyForecast
    }

    throw new Error('Error') // todo написать экспешн
  }

  public get selectedDailyForecastReport() {
    if (this._selectedDailyForecastReport) {
      return this._selectedDailyForecastReport
    }

    throw new Error('Error') // todo написать экспешн
  }

  public get evenSelectedDailyForecastReports() {
    return getEvenArrayElements(this.selectedDailyForecast.data)
  }

  private get selectedDailyForecastIndex() {
    return this.forecastDays
      .map(({ identifier }) => identifier)
      .indexOf(this.selectedDailyForecast.identifier)
  }

  private get selectedDailyForecastReportIndex() {
    const dailyForecast = this.selectedDailyForecast
    const selectedWeatherReport = this.selectedDailyForecastReport

    return dailyForecast.data
      .map(({ dt_txt }) => dt_txt)
      .indexOf(selectedWeatherReport.dt_txt)
  }

  public set forecast(forecastResponse: IFiveDayForecastResponse) {
    this._forecast = forecastResponse
  }

  public setSelectedDailyForecast(dailyForecast: IDailyForecast) {
    this._selectedDailyForecast = dailyForecast

    this.setSelectedDailyForecastReport(dailyForecast.data[0])
  }

  public setSelectedDailyForecastReport(
    dailyForecastReport: IForecastWeatherReport
  ) {
    this._selectedDailyForecastReport = dailyForecastReport
  }

  public setNextDailyForecast() {
    let nextDailyForecastIndex = this.selectedDailyForecastIndex + 1

    if (nextDailyForecastIndex === this.forecastDays.length) {
      nextDailyForecastIndex = 0
    }

    this.setSelectedDailyForecast(this.forecastDays[nextDailyForecastIndex])
  }

  public setPrevDailyForecast() {
    let prevDailyForecastIndex = this.selectedDailyForecastIndex - 1

    if (prevDailyForecastIndex < 0) {
      prevDailyForecastIndex = this.forecastDays.length - 1
    }

    this.setSelectedDailyForecast(this.forecastDays[prevDailyForecastIndex])
  }

  // todo сделать переключение только четными элементами
  public setNextDailyForecastReport() {
    const forecastDataLength = this.selectedDailyForecast.data.length
    let nextDailyForecastReportIndex = this.selectedDailyForecastReportIndex + 1

    if (nextDailyForecastReportIndex === forecastDataLength) {
      nextDailyForecastReportIndex = 0
    }

    this.setSelectedDailyForecastReport(
      this.selectedDailyForecast.data[nextDailyForecastReportIndex]
    )
  }

  public setPrevDailyForecastReport() {
    let prevDailyForecastReportIndex = this.selectedDailyForecastReportIndex - 1

    if (prevDailyForecastReportIndex < 0) {
      prevDailyForecastReportIndex = this.selectedDailyForecast.data.length - 1
    }

    this.setSelectedDailyForecastReport(
      this.selectedDailyForecast.data[prevDailyForecastReportIndex]
    )
  }

  public checkIsForecastSelected(forecastIdentifier: number) {
    return this.selectedDailyForecast.identifier === forecastIdentifier
  }
}

export default new ForecastStore()
