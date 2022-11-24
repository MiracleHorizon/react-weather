import { IDailyForecast } from 'models/weather/forecast/IDailyForecast'

export const getEvenForecastReports = (dailyForecast: IDailyForecast) => {
  const reports = dailyForecast.data

  return reports.length > 6
    ? reports.filter((_, i) => (i + 1) % 2 === 0)
    : reports
}
