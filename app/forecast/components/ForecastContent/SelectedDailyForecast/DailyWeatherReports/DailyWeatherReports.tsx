import DailyWeatherReportsList from './DailyWeatherReportsList/DailyWeatherReportsList'
import { DateFns } from '@libs/DateFns'
import type { DailyForecastModel, ForecastCity } from '@models/weather'

export default function DailyWeatherReports({
  dateTimestamp,
  selectedDailyForecast,
  forecastCity
}: Props) {
  return (
    <div className='[440px-max]:mt-[6px]'>
      <h3 className='mb-[6px] hidden w-full text-center text-[19px] dark:text-gray-200 [440px-max]:inline-block'>
        {DateFns.formatDate(dateTimestamp, 'HH:mm, d MMMM')}
      </h3>
      <DailyWeatherReportsList
        dailyForecast={selectedDailyForecast}
        forecastCity={forecastCity}
        className='mt-[16px] [440px-max]:mt-0'
      />
    </div>
  )
}

interface Props {
  dateTimestamp: number
  selectedDailyForecast: DailyForecastModel
  forecastCity: ForecastCity
}
