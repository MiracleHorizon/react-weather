import { observer } from 'mobx-react-lite'

import dynamic from 'next/dynamic'

import WeeklyForecastListSkeleton from './WeeklyForecastListSkeleton'
import { useForecastStore } from '@stores/forecastStore'

const DailyForecast = dynamic(() => import('./DailyForecast'), {
  ssr: false,
  loading: () => <WeeklyForecastListSkeleton />
})

function WeeklyForecastList() {
  const forecastCity = useForecastStore.getCity()
  const dailyForecasts = useForecastStore.getDailyForecasts()

  if (!forecastCity || dailyForecasts.length === 0) {
    return <WeeklyForecastListSkeleton />
  }

  return (
    <ul className='flex w-full justify-center gap-x-[8px] [440px-max]:flex-col'>
      {dailyForecasts.map(dailyForecast => (
        <DailyForecast
          key={dailyForecast.id}
          forecastCity={forecastCity}
          dailyForecast={dailyForecast}
          totalDays={dailyForecasts.length}
          isSelected={useForecastStore.isDailyForecastSelected(
            dailyForecast.id
          )}
        />
      ))}
    </ul>
  )
}

export default observer(WeeklyForecastList)
