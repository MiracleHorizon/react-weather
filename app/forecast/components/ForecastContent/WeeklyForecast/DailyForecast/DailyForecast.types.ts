import type { DailyForecastModel, ForecastCity } from '@models/weather'

export interface Props {
  forecastCity: ForecastCity
  dailyForecast: DailyForecastModel
  totalDays: number
  isSelected: boolean
}
