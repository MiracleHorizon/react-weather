import { makeAutoObservable } from 'mobx'

import { WeatherUnitsSystem } from 'models/weather/enums/WeatherUnitsSystem'
import { AtmosphericPressureUnits } from 'models/weather/enums/AtmosphericPressureUnits'

class AppStore {
  private _city = 'Norilsk'
  private _unitsSystem = WeatherUnitsSystem.METRIC
  private _atmosphericPressureUnits = AtmosphericPressureUnits.PASCAL

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
