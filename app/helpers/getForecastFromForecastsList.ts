import { IForecastSegment } from 'models/api/responses/IFiveDayForecastResponse'

export const getForecastFromForecastsList = (list: IForecastSegment[]) => {
  const dates = list.map(segment => new Date(segment.dt_txt).getDate())
  const uniqueDates = Array.from(new Set(dates))

  return uniqueDates.map(date => {
    const segments = []

    for (const segment of list) {
      const dateValue = new Date(segment.dt_txt).getDate()

      if (dateValue === date) segments.push(segment)
    }

    return segments
  })
}
