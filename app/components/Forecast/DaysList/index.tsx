import ForecastStore from 'stores/ForecastStore'
import { ForecastItem } from './ForecastItem'

export const ForecastDaysList = () => (
  <footer className='px-[34px] mobile:px-[18px] mt-auto'>
    <ul className='flex justify-between'>
      {ForecastStore.forecastDays.map(dailyForecast => (
        <ForecastItem key={dailyForecast.identifier} {...dailyForecast} />
      ))}
    </ul>
  </footer>
)
