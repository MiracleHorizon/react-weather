import { makeAutoObservable } from 'mobx'

import { Theme } from 'models/enums/Theme'

class UiStore {
  private _theme = Theme.SYSTEM

  constructor() {
    makeAutoObservable(this)
  }

  public get theme() {
    return this._theme
  }

  public setTheme = (value: Theme) => {
    this._theme = value
  }
}

export default new UiStore()
