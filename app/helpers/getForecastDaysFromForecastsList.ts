import { IDailyForecast } from 'models/weather/forecast/IDailyForecast'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'

export const getForecastDaysFromForecastsList = (
  list: IWeatherReport[]
): IDailyForecast[] => {
  const dates = list.map(segment => new Date(segment.dt_txt).getDate())
  const uniqueDates = Array.from(new Set(dates))

  const forecastsList = uniqueDates.map(date => {
    const segments = []

    for (const segment of list) {
      const dateValue = new Date(segment.dt_txt).getDate()

      if (dateValue === date) segments.push(segment)
    }

    return segments
  })

  return forecastsList.map((forecast, index) => ({
    identifier: forecast[0].dt || index,
    data: forecast,
  }))
}
