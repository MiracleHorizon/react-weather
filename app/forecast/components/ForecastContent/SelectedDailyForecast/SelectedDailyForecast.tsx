import { useMemo } from 'react'
import { observer } from 'mobx-react-lite'

import WeatherHeader from '@components/WeatherHeader'
import WeatherCondition from '@components/WeatherCondition'
import WeatherDetailsSection from '@components/InfoSection/sections/WeatherDetailsSection'
import DailyWeatherReports from './DailyWeatherReports'
import SelectedDailyForecastSkeleton from './SelectedDailyForecastSkeleton'
import { ClientCookieExtractor } from '@utils/client/ClientCookieExtractor'
import { WeatherForecastReport } from '@entities/weather'
import { useForecastStore } from '@stores/forecastStore'

function SelectedDailyForecast() {
  const forecastCity = useForecastStore.getCity()
  const selectedDailyForecast = useForecastStore.selectedDailyForecast
  const selectedWeatherReport = useForecastStore.selectedWeatherReport
  const unitSystem = ClientCookieExtractor.extractUnitSystem()

  const weatherForecastReport = useMemo(() => {
    if (!selectedDailyForecast || !selectedWeatherReport || !forecastCity) {
      return null
    }
    return new WeatherForecastReport({
      report: selectedWeatherReport,
      forecastCity
    })
  }, [forecastCity, selectedDailyForecast, selectedWeatherReport])

  if (
    !weatherForecastReport ||
    !selectedDailyForecast ||
    !forecastCity ||
    !unitSystem
  ) {
    return <SelectedDailyForecastSkeleton />
  }

  const {
    report,
    location,
    temperature,
    description,
    iconClassName,
    dateTimestamp
  } = weatherForecastReport

  return (
    <div className='mb-[12px] w-full'>
      <WeatherHeader
        location={location}
        timezone={forecastCity.timezone}
        dateTimestamp={dateTimestamp}
      />
      <WeatherCondition
        weatherDescription={description}
        temperature={temperature}
        iconClassName={iconClassName}
        unitSystem={unitSystem}
        className='mt-[20px] [440px-max]:mb-[12px]'
      />
      <WeatherDetailsSection
        baseReport={weatherForecastReport.report}
        unitSystem={unitSystem}
        clouds={report.clouds}
        wind={report.wind}
      />
      <DailyWeatherReports
        dateTimestamp={dateTimestamp}
        selectedDailyForecast={selectedDailyForecast}
        forecastCity={forecastCity}
      />
    </div>
  )
}

export default observer(SelectedDailyForecast)
