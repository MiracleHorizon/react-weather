import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

import ForecastStore from 'stores/ForecastStore'
import { LocationBar } from 'components/LocationBar'
import { TemperatureBar } from 'components/TemperatureBar'
import { WeatherInfoPanel } from 'components/WeatherInfoPanel'

export const ForecastTopPanel = observer(() => {
  const {
    location,
    selectedDailyForecastReport,
    evenSelectedDailyForecastReports,
  } = ForecastStore

  useEffect(() => {
    const firstForecastWeatherReport = evenSelectedDailyForecastReports[0]

    ForecastStore.setSelectedDailyForecastReport(firstForecastWeatherReport)
  }, [evenSelectedDailyForecastReports])

  return (
    <div className='pb-[16px]'>
      <TemperatureBar {...selectedDailyForecastReport} />
      <LocationBar {...location} />
      <WeatherInfoPanel {...selectedDailyForecastReport} />
    </div>
  )
})
