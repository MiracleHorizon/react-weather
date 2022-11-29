import { makeAutoObservable } from 'mobx'

import { CurrentWeatherReport } from 'modules/weather/reports/CurrentWeatherReport'
import { ICurrentWeatherReport } from 'models/weather/reports/ICurrentWeatherReport'

class CurrentWeatherStore {
  private _weather = {} as CurrentWeatherReport // todo доработать

  constructor() {
    makeAutoObservable(this)
  }

  public get weather() {
    return this._weather as CurrentWeatherReport
  }

  public setWeather(value: ICurrentWeatherReport) {
    this._weather = new CurrentWeatherReport(value)
  }
}

export default new CurrentWeatherStore()
