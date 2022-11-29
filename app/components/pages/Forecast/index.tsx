import { useEffect, useState } from 'react'

import ForecastStore from 'stores/ForecastStore'
import { DefaultLayout } from 'layouts/Default'
import { ForecastTitle } from './ForecastTitle'
import { ListOfDailyForecasts } from './ListOfDailyForecasts'
import { DailyForecastReportSection } from './DailyForecastReportSection'

export const Forecast = () => {
  const [loaded, setLoaded] = useState(false)

  // todo исправить костыль
  useEffect(() => {
    const firstDay = ForecastStore.forecastDays[0]
    const firstDailyForecast = firstDay.data[0]

    ForecastStore.setSelectedDailyForecast(firstDay)
    ForecastStore.setSelectedDailyForecastReport(firstDailyForecast)

    setLoaded(true)
  }, [])

  if (!loaded) return null

  return (
    <DefaultLayout>
      <main className='h-full flex flex-col'>
        <div className='bg-gray-50 pt-[40px] pb-[30px] px-[26px]'>
          <ForecastTitle />
          <DailyForecastReportSection />
        </div>
        <ListOfDailyForecasts />
      </main>
    </DefaultLayout>
  )
}
