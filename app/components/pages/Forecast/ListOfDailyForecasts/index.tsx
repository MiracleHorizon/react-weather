import { observer } from 'mobx-react-lite'
import { useEventListener } from 'usehooks-ts'

import ForecastStore from 'stores/ForecastStore'
import { DailyForecast } from './DailyForecast'
import { ArrowKey } from 'models/enums/ArrowKey'

export const ListOfDailyForecasts = observer(() => {
  const { forecastDays } = ForecastStore

  useEventListener('keydown', e => {
    if (e.code === ArrowKey.LEFT || e.code === 'KeyA') {
      ForecastStore.setPrevDailyForecast()
    }

    if (e.code === ArrowKey.RIGHT || e.code === 'KeyD') {
      ForecastStore.setNextDailyForecast()
    }
  })

  return (
    <div className='w-screen mt-auto px-[26px] pb-[4px] pt-[12px]'>
      <ul className='flex justify-between'>
        {forecastDays.map(dailyForecast => (
          <DailyForecast key={dailyForecast.identifier} {...dailyForecast} />
        ))}
      </ul>
    </div>
  )
})
