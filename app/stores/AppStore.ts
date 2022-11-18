import { makeAutoObservable } from 'mobx'

import { WeatherUnitsSystem } from 'models/WeatherUnitsSystem'

class AppStore {
  private _unitsSystem: WeatherUnitsSystem = WeatherUnitsSystem.METRIC

  constructor() {
    makeAutoObservable(this)
  }

  public get unitsSystem() {
    return this._unitsSystem
  }
}

export default new AppStore()
