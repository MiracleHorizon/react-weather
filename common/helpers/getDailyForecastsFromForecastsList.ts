// TODO: Renaming
import type { WeatherForecastReportModel } from '@models/weather'

export function getDailyForecastsFromForecastsList(
  forecastsList: WeatherForecastReportModel[]
) {
  const forecastsDates = forecastsList.map(forecast =>
    new Date(forecast.dt_txt).getDate()
  )
  const uniqueForecastsDates = Array.from(new Set(forecastsDates))

  const dailyForecasts = uniqueForecastsDates.map(date => {
    const forecasts = []

    for (const forecast of forecastsList) {
      const dateValue = new Date(forecast.dt_txt).getDate()
      if (dateValue === date) {
        forecasts.push(forecast)
      }
    }

    return forecasts
  })

  return dailyForecasts.map((forecasts, index) => ({
    identifier: forecasts[0]?.dt ?? index,
    data: forecasts
  }))
}
