import { makeAutoObservable } from 'mobx'

import { Temperature } from 'modules/weather/Temperature'
import { DailyForecasts } from 'modules/weather/DailyForecasts'
import { ForecastWeatherReport } from 'modules/weather/reports/ForecastWeatherReport'
import { getDailyForecastsFromForecastsList } from 'utils/helpers/getDailyForecastsFromForecastsList'
import { getTempObjectFromMainWeatherInfo } from 'utils/helpers/getTempObjectFromMainWeatherInfo'
import { IFiveDayForecastResponse } from 'models/api/IFiveDayForecastResponse'
import { IForecastWeatherReport } from 'models/weather/reports/IForecastWeatherReport'
import { IDailyForecast } from 'models/weather/IDailyForecast'

class ForecastStore {
  private _forecast = {} as IFiveDayForecastResponse
  private _dailyForecasts = {} as DailyForecasts
  private _selectedDailyForecast = {} as IDailyForecast
  private _selectedWeatherReport = {} as ForecastWeatherReport

  constructor() {
    makeAutoObservable(this)
  }

  public get dailyForecasts() {
    return this._dailyForecasts.dailyForecasts
  }

  public get selectedWeatherReport() {
    return this._selectedWeatherReport
  }

  private get minDailyTemperature() {
    return this._selectedDailyForecast.data
      .slice(0)
      .sort((reportA, reportB) => {
        return reportA.main.temp - reportB.main.temp
      })[0].main.temp
  }

  private get maxDailyTemperature() {
    return this._selectedDailyForecast.data
      .slice(0)
      .sort((reportA, reportB) => {
        return reportB.main.temp - reportA.main.temp
      })[0].main.temp
  }

  public get temperatureChartData() {
    if (!this._selectedDailyForecast?.data) return {}

    const data = this._selectedDailyForecast.data.map(report => {
      const temperatureObject = getTempObjectFromMainWeatherInfo(report.main)

      const dateHours = new Date(report.dt_txt)
        .toLocaleTimeString()
        .split(':')
        .slice(0, 2)
        .join(':')

      return {
        time: dateHours,
        temperature: temperatureObject.temp
      }
    })

    return {
      restrictions: {
        min: Math.floor(this.minDailyTemperature) - 1,
        max: Math.ceil(this.maxDailyTemperature) + 1
      },
      labels: data.map(report => report.time),
      dataArray: data.map(report => report.temperature)
    }
  }

  public set forecast(value: IFiveDayForecastResponse) {
    this._forecast = value

    const forecastsList = getDailyForecastsFromForecastsList(value.list)

    this._dailyForecasts = new DailyForecasts(
      forecastsList,
      forecastsList[0].identifier
    )
  }

  public setDailyForecast(dailyForecast: IDailyForecast) {
    this._selectedDailyForecast = dailyForecast
    this.setWeatherReport(dailyForecast.data[0])
  }

  public setWeatherReport(report: IForecastWeatherReport) {
    this._selectedWeatherReport = new ForecastWeatherReport(report)
  }

  public setNextDailyForecast() {
    this.setDailyForecast(this._dailyForecasts.nextDailyForecast)
  }

  public setPrevDailyForecast() {
    this.setDailyForecast(this._dailyForecasts.prevDailyForecast)
  }

  public checkIsForecastSelected(forecastIdentifier: number): boolean {
    return this._selectedDailyForecast.identifier === forecastIdentifier
  }
}

export default new ForecastStore()
