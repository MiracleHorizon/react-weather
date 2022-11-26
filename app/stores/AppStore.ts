import { makeAutoObservable } from 'mobx'

import { WeatherUnitsSystem } from 'models/enums/WeatherUnitsSystem'
import { AtmosphericPressureUnits } from 'models/enums/AtmosphericPressureUnits'

class AppStore {
  private _city = 'New York'
  private _unitsSystem = WeatherUnitsSystem.METRIC
  private _atmosphericPressureUnits =
    AtmosphericPressureUnits.MILLIMETRES_OF_MERCURY

  constructor() {
    makeAutoObservable(this)
  }

  public get city() {
    return this._city
  }

  public get unitsSystem() {
    return this._unitsSystem
  }

  public get atmosphericPressureUnits() {
    return this._atmosphericPressureUnits
  }

  public setUnitsSystem(value: WeatherUnitsSystem) {
    this._unitsSystem = value
  }

  public setAtmosphericPressureUnits(value: AtmosphericPressureUnits) {
    this._atmosphericPressureUnits = value
  }
}

export default new AppStore()
