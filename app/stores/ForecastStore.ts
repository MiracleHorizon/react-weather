import { makeAutoObservable } from 'mobx'

import { IFiveDayForecastResponse } from 'models/api/responses/IFiveDayForecastResponse'

class ForecastStore {
  private _forecast: IFiveDayForecastResponse = {} as IFiveDayForecastResponse //!

  constructor() {
    makeAutoObservable(this)
  }

  public get forecastList() {
    return this._forecast.list
  }

  public set forecast(forecastResponse: IFiveDayForecastResponse) {
    this._forecast = forecastResponse
  }
}

export default new ForecastStore()
