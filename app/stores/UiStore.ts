import { makeAutoObservable } from 'mobx'

import { Theme } from 'models/enums/Theme'
import { DailyForecastPanelLayout } from 'models/weather/enums/DailyForecastPanelLayout'

class UiStore {
  private _theme = Theme.SYSTEM
  private _dailyForecastPanelLayout = DailyForecastPanelLayout.LIST

  constructor() {
    makeAutoObservable(this)
  }

  public get theme() {
    return this._theme
  }

  public get dailyForecastPanelLayout() {
    return this._dailyForecastPanelLayout
  }

  public setTheme = (value: Theme) => {
    this._theme = value
  }

  public setDailyForecastPanelLayout = (layout: DailyForecastPanelLayout) => {
    this._dailyForecastPanelLayout = layout
  }
}

export default new UiStore()
