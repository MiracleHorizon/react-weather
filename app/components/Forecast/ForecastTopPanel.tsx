import { observer } from 'mobx-react-lite'

import ForecastStore from 'stores/ForecastStore'
import { LocationBar } from './LocationBar'
import { TemperatureBar } from './TemperatureBar'
import { WeatherInfoPanel } from 'components/WeatherInfoPanel'

export const ForecastTopPanel = observer(() => {
  const { setSelectedDailyForecastReport } = ForecastStore

  return (
    <div className='bg-gray-50 pb-[12px]'>
      <TemperatureBar />
      <LocationBar />
      {/*<WeatherInfoPanel {...selectedDailyForecastSegment} />*/}
    </div>
  )
})
