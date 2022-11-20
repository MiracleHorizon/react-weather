import AppStore from 'stores/AppStore'
import { WeatherUnitsSystem } from 'models/WeatherUnitsSystem'
import { WindDirection } from 'models/WindDirection'
import { WeatherUnits } from './WeatherUnits'

// Todo Переработать
export class Wind {
  private static _units = AppStore.unitsSystem

  public static getWindSpeed(windSpeed: number): number {
    switch (this._units) {
      case WeatherUnitsSystem.DEFAULT:
        return WeatherUnits.getMetricSpeedFromImperial(windSpeed)
      case WeatherUnitsSystem.METRIC:
        return WeatherUnits.getMetricSpeedFromImperial(windSpeed)
      case WeatherUnitsSystem.IMPERIAL:
        return WeatherUnits.getImperialSpeedFromMetric(windSpeed)
    }
  }

  public static getWindGustsSpeed(windGustsSpeed: number): number {
    switch (this._units) {
      case WeatherUnitsSystem.DEFAULT:
        return WeatherUnits.getMetricSpeedFromImperial(windGustsSpeed)
      case WeatherUnitsSystem.METRIC:
        return WeatherUnits.getMetricSpeedFromImperial(windGustsSpeed)
      case WeatherUnitsSystem.IMPERIAL:
        return WeatherUnits.getImperialSpeedFromMetric(windGustsSpeed)
    }
  }

  public static getWindDirection(windDirectionDegrees: number): string {
    if (windDirectionDegrees >= 0 && windDirectionDegrees < 45) {
      return WindDirection.N
    } else if (windDirectionDegrees >= 45 && windDirectionDegrees < 90) {
      return WindDirection.NE
    } else if (windDirectionDegrees >= 90 && windDirectionDegrees < 135) {
      return WindDirection.E
    } else if (windDirectionDegrees >= 135 && windDirectionDegrees < 180) {
      return WindDirection.SE
    } else if (windDirectionDegrees >= 180 && windDirectionDegrees < 225) {
      return WindDirection.S
    } else if (windDirectionDegrees >= 225 && windDirectionDegrees < 270) {
      return WindDirection.SW
    } else if (windDirectionDegrees >= 270 && windDirectionDegrees < 315) {
      return WindDirection.W
    } else if (windDirectionDegrees >= 315 && windDirectionDegrees < 360) {
      return WindDirection.NW
    } else {
      return WindDirection.N
    }
  }
}
