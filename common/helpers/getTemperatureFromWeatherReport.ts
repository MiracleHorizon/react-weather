import type { BaseWeatherReport, TemperatureModel } from '@models/weather'

export function getTemperatureFromWeatherReport(
  baseWeatherReport: BaseWeatherReport
): TemperatureModel {
  const { temp, temp_min, temp_max, feels_like } = baseWeatherReport.main

  return {
    temp,
    min: temp_min,
    max: temp_max,
    feelsLike: feels_like
  }
}
