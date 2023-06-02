// NOTE: Open Weather API возвращает timezone offset в формате секунд
export function getOpenWeatherTimezoneOffset(timezone: number): number {
  return timezone / (60 * 60)
}
