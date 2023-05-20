import { useEffect, useState } from 'react'

import ForecastStore from 'stores/ForecastStore'
import { DefaultLayout } from 'layouts/Default'
import { ForecastTitle } from './ForecastTitle'
import { ListOfDailyForecasts } from './ListOfDailyForecasts'
import { DailyForecastReportBar } from './DailyForecastReportBar'
import { TemperatureChartSection } from './TemperatureChart'

export const Forecast = () => {
  const [loaded, setLoaded] = useState(false)

  // todo исправить костыль
  useEffect(() => {
    ForecastStore.setDailyForecast(ForecastStore.dailyForecasts[0])

    setLoaded(true)
  }, [])

  if (!loaded) return null

  return (
    <DefaultLayout title='Weekly'>
      <main className='h-full flex flex-col'>
        <section className='bg-gray-50 pt-[40px] pb-[30px] px-[26px]'>
          <ForecastTitle />
          <DailyForecastReportBar />
        </section>
        <TemperatureChartSection />
        <ListOfDailyForecasts />
      </main>
    </DefaultLayout>
  )
}
