import { useEventListener } from 'usehooks-ts'
import { observer } from 'mobx-react-lite'

import ForecastStore from 'stores/ForecastStore'
import { ForecastItem } from './ForecastItem'

export const ForecastDaysList = observer(() => {
  useEventListener('keydown', e => {
    if (e.code === 'ArrowLeft') {
      ForecastStore.setPrevDailyForecast()
    }

    if (e.code === 'ArrowRight') {
      ForecastStore.setNextDailyForecast()
    }
  })

  return (
    <footer className='px-[34px] sm-max:px-[18px] mt-auto'>
      <ul className='flex justify-between'>
        {ForecastStore.forecastDays.map(dailyForecast => (
          <ForecastItem key={dailyForecast.identifier} {...dailyForecast} />
        ))}
      </ul>
    </footer>
  )
})
