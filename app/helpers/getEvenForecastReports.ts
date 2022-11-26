import { IDailyForecast } from 'models/weather/IDailyForecast'

export const getEvenForecastReports = (dailyForecast: IDailyForecast) => {
  const reports = dailyForecast.data

  // todo доработать
  return reports.length > 4
    ? reports.filter((_, i) => (i + 1) % 2 === 0)
    : reports
}
