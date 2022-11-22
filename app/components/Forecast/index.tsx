import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

import ForecastStore from 'stores/ForecastStore'
import { DefaultLayout } from 'layouts/Default'
import { ForecastDaysList } from './ForecastDaysList'
import { ForecastTopPanel } from './ForecastTopPanel'
import { DailyForecastPanel } from './DailyForecastPanel'

export const WeatherForecast = observer(() => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const firstDay = ForecastStore.forecastDays[0]
    const firstDailyForecast = firstDay.data[0]

    ForecastStore.setSelectedDailyForecast(firstDay)
    ForecastStore.setSelectedDailyForecastReport(firstDailyForecast)

    setLoaded(true)
  }, [])

  // useEffect(() => {
  //   if (loaded) {
  //     const firstDailyForecastReport =
  //       ForecastStore.selectedDailyForecast.data[0]
  //
  //     ForecastStore.setSelectedDailyForecastReport(firstDailyForecastReport)
  //   }
  // }, [ForecastStore.selectedDailyForecast, loaded])

  if (!loaded) return null

  return (
    <DefaultLayout title='Weather Forecast'>
      <main className='h-full flex flex-col'>
        <div>
          <ForecastTopPanel />
          <DailyForecastPanel />
        </div>
        <ForecastDaysList />
      </main>
    </DefaultLayout>
  )
})
