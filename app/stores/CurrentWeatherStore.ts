import { makeAutoObservable } from 'mobx'

import { CurrentWeatherReport } from 'modules/weather/reports/CurrentWeatherReport'
import { ICurrentWeatherReport } from 'models/weather/reports/ICurrentWeatherReport'

class CurrentWeatherStore {
  private _weather = {} as any // todo доработать

  constructor() {
    makeAutoObservable(this)
  }

  public get weather() {
    return this._weather
  }

  public set weather(value: ICurrentWeatherReport) {
    this._weather = new CurrentWeatherReport(value)
  }
}

export default new CurrentWeatherStore()
