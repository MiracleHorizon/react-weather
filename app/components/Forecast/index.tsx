import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'

import ForecastStore from 'stores/ForecastStore'
import { DefaultLayout } from 'layouts/Default'
import { ForecastDaysList } from './DaysList'
import { ForecastTopPanel } from './TopPanel'
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

  // todo реализовать корректно код снизу
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
      <main className='h-full flex flex-col pb-[16px]'>
        <div className='w-full bg-gray-100'>
          <ForecastTopPanel />
          <DailyForecastPanel />
        </div>
        <ForecastDaysList />
      </main>
    </DefaultLayout>
  )
})
