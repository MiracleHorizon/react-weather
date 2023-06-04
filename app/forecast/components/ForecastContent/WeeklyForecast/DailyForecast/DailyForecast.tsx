import { memo, useMemo } from 'react'

import DailyForecastRegular from './DailyForecastRegular'
import DailyForecastMobile from './DailyForecastMobile'
import { WeatherForecastReport } from '@entities/weather'
import { useForecastStore } from '@stores/forecastStore'
import { getMiddleArrayElement } from '@helpers/getMiddleArrayElement'
import type { Props } from './DailyForecast.types'

function DailyForecast({
  dailyForecast,
  forecastCity,
  totalDays,
  isSelected
}: Props) {
  const weatherForecastReport = useMemo(() => {
    const middleDailyWeatherReport = getMiddleArrayElement(dailyForecast.data)
    if (!middleDailyWeatherReport) return

    return new WeatherForecastReport({
      report: middleDailyWeatherReport,
      forecastCity
    })
  }, [dailyForecast.data, forecastCity])

  function handleSelectDailyForecast() {
    useForecastStore.selectDailyForecastById(dailyForecast.id)
  }

  if (!weatherForecastReport) {
    return null
  }

  return (
    <>
      <DailyForecastRegular
        isSelected={isSelected}
        totalDays={totalDays}
        dateTimestamp={weatherForecastReport.dateTimestamp}
        temperature={weatherForecastReport.temperature.temp}
        iconClassName={weatherForecastReport.iconClassName}
        handleSelectDailyForecast={handleSelectDailyForecast}
      />
      <DailyForecastMobile
        isSelected={isSelected}
        dateTimestamp={weatherForecastReport.dateTimestamp}
        temperature={weatherForecastReport.temperature.temp}
        iconClassName={weatherForecastReport.iconClassName}
        handleSelectDailyForecast={handleSelectDailyForecast}
      />
    </>
  )
}

export default memo(DailyForecast)
