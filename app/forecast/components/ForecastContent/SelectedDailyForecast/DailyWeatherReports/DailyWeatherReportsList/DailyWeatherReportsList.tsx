import { twMerge } from 'tailwind-merge'

import DailyWeatherReportItem from './DailyWeatherReportItem'
import { useForecastStore } from '@stores/forecastStore'
import type { DailyForecastModel, ForecastCity } from '@models/weather'

function DailyWeatherReportsList({
  dailyForecast,
  forecastCity,
  className
}: Props) {
  // TODO: Slice
  return (
    <ul
      className={twMerge('flex flex-col justify-center gap-[10px]', className)}
    >
      {dailyForecast.data.slice(0, 5).map(report => (
        <DailyWeatherReportItem
          key={report.dt}
          report={report}
          forecastCity={forecastCity}
          isSelected={useForecastStore.isWeatherReportSelected(report.dt)}
        />
      ))}
    </ul>
  )
}

export default DailyWeatherReportsList

interface Props {
  dailyForecast: DailyForecastModel
  forecastCity: ForecastCity
  className?: string
}
