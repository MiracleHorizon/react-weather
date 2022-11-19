import { makeAutoObservable } from 'mobx'

import { WeatherUnitsSystem } from 'models/WeatherUnitsSystem'
import { AtmosphericPressureUnits } from 'models/AtmosphericPressureUnits'

class AppStore {
  private _unitsSystem: WeatherUnitsSystem = WeatherUnitsSystem.METRIC
  private _atmosphericPressureUnits: AtmosphericPressureUnits =
    AtmosphericPressureUnits.MILLIMETRES_OF_MERCURY

  constructor() {
    makeAutoObservable(this)
  }

  public get unitsSystem() {
    return this._unitsSystem
  }

  public get atmosphericPressureUnits() {
    return this._atmosphericPressureUnits
  }
}

export default new AppStore()
