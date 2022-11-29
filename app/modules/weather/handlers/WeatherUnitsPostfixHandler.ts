import AppStore from 'stores/AppStore'
import { WeatherUnitsSystem } from 'models/weather/enums/WeatherUnitsSystem'
import { AtmosphericPressureUnits } from 'models/weather/enums/AtmosphericPressureUnits'

export class WeatherUnitsPostfixHandler {
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

  public static getWindSpeedUnitsPostfix(): string {
    switch (this._units) {
      case WeatherUnitsSystem.DEFAULT:
        return 'm/s'
      case WeatherUnitsSystem.IMPERIAL:
        return 'ml/h'
      case WeatherUnitsSystem.METRIC:
        return 'm/s'
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

  public static getVisibilityUnitsPostfix(): string {
    switch (this._units) {
      case WeatherUnitsSystem.DEFAULT:
        return 'km'
      case WeatherUnitsSystem.IMPERIAL:
        return 'ml'
      case WeatherUnitsSystem.METRIC:
        return 'km'
    }
  }
}
