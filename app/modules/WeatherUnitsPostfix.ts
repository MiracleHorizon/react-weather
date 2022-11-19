import AppStore from 'stores/AppStore'
import { WeatherUnitsSystem } from 'models/WeatherUnitsSystem'
import { AtmosphericPressureUnits } from 'models/AtmosphericPressureUnits'

export class WeatherUnitsPostfix {
  private static _units = AppStore.unitsSystem
  private static _atmosphericPressureUnits = AppStore.atmosphericPressureUnits

  public static getPressureUnitsPostfix(): string {
    switch (this._atmosphericPressureUnits) {
      case AtmosphericPressureUnits.MILLIMETRES_OF_MERCURY:
        return 'mmHg'
      case AtmosphericPressureUnits.PASCAL:
        return 'hPa'
    }
  }

  public static getSpeedUnitsPostfix(): string {
    switch (this._units) {
      case WeatherUnitsSystem.DEFAULT:
        return 'km/h'
      case WeatherUnitsSystem.IMPERIAL:
        return 'ml/h'
      case WeatherUnitsSystem.METRIC:
        return 'km/h'
    }
  }

  public static getTemperatureUnitsPostfix(): string {
    switch (this._units) {
      case WeatherUnitsSystem.DEFAULT:
        return 'K'
      case WeatherUnitsSystem.IMPERIAL:
        return 'F'
      case WeatherUnitsSystem.METRIC:
        return 'C'
    }
  }
}
