import { makeAutoObservable } from 'mobx'

import { WeatherUnitsSystem } from 'models/WeatherUnitsSystem'
import { AtmosphericPressureUnits } from 'models/AtmosphericPressureUnits'

class AppStore {
  private _unitsSystem = WeatherUnitsSystem.METRIC
  private _atmosphericPressureUnits =
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

  public set unitsSystem(value: WeatherUnitsSystem) {
    this._unitsSystem = value
  }

  public set atmosphericPressureUnits(value: AtmosphericPressureUnits) {
    this._atmosphericPressureUnits = value
  }
}

export default new AppStore()
