import { makeAutoObservable } from 'mobx'

import { Theme } from 'models/enums/Theme'
import { DailyForecastPanelLayout } from 'models/enums/DailyForecastPanelLayout'

class UiStore {
  private _theme = Theme.SYSTEM
  private _dailyForecastPanelLayout = DailyForecastPanelLayout.LIST
  // private _dailyForecastPanelLayout = localStorage.getItem(
  //   'dailyForecastPanelLayout'
  // ) as DailyForecastPanelLayout.LIST

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
    localStorage.setItem('dailyForecastPanelLayout', layout)
  }
}

export default new UiStore()
