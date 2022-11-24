import { observer } from 'mobx-react-lite'

import ForecastStore from 'stores/ForecastStore'
import { LocationBar } from './LocationBar'
import { TemperatureBar } from './TemperatureBar'
import { WeatherInfoPanel } from 'components/WeatherInfoPanel'

export const ForecastTopPanel = observer(() => {
  const { selectedDailyForecastReport } = ForecastStore

  return (
    <div className='pb-[16px]'>
      <TemperatureBar />
      <LocationBar />
      {/*<WeatherInfoPanel {...selectedDailyForecastReport} />*/}
    </div>
  )
})
