import AppStore from 'stores/AppStore'
import { WeatherUnitsSystem } from 'models/WeatherUnitsSystem'

export class WeatherUnits {
  private static _units = AppStore.unitsSystem

  public static getSpeedUnitsPostfix(): string {
    switch (this._units) {
      case WeatherUnitsSystem.IMPERIAL:
        return 'ml/h'
      case WeatherUnitsSystem.METRIC:
        return 'km/h'
    }
  }

  public static getTemperatureUnitsPostfix(): string {
    switch (this._units) {
      case WeatherUnitsSystem.IMPERIAL:
        return 'F'
      case WeatherUnitsSystem.METRIC:
        return 'C'
    }
  }

  public static getMetricSpeedFromImperial(imperialSpeed: number): number {
    // Километры в час.
    const IMPERIAL_SPEED_MULTIPLY_VALUE = 0.62

    return imperialSpeed * IMPERIAL_SPEED_MULTIPLY_VALUE
  }

  public static getImperialSpeedFromMetric(metricSpeed: number): number {
    // Мили в час.
    const METRIC_SPEED_MULTIPLY_VALUE = 1.61

    return metricSpeed * METRIC_SPEED_MULTIPLY_VALUE
  }

  public static getImperialTemperatureFromMetric(
    metricTemperature: number
  ): number {
    return metricTemperature * (5 / 9) + 32
  }

  public static getMetricTemperatureFromImperial(
    imperialTemperature: number
  ): number {
    return (imperialTemperature - 32) * (5 / 9)
  }
}
