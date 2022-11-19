export class WeatherUnits {
  public static getPascalPressureFromMmOfMercury(pressure: number): number {
    // Гектопаскали.
    const PASCAL_PRESSURE_MULTIPLY_VALUE = 0.750062

    return pressure * PASCAL_PRESSURE_MULTIPLY_VALUE
  }

  public static getMmOfMercuryPressureFromPascal(pressure: number): number {
    // Миллиметры ртутного столба.
    const MM_OF_MERCURY_PRESSURE_MULTIPLY_VALUE = 133.32

    return pressure * MM_OF_MERCURY_PRESSURE_MULTIPLY_VALUE
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
