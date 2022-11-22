import { useMemo } from 'react'
import { observer } from 'mobx-react-lite'

import ForecastStore from 'stores/ForecastStore'
import { WeatherReport } from 'modules/weather/WeatherReport'
import { TEMPERATURE_DEGREE_SIGN } from 'constants/weather'

export const TemperatureBar = observer(() => {
  const { selectedDailyForecastReport } = ForecastStore

  const { temperature } = useMemo(() => {
    return new WeatherReport(selectedDailyForecastReport)
  }, [selectedDailyForecastReport])

  return (
    <div className='flex items-start justify-center'>
      <h2 className='block h-[85px] text-[60px] font-medium'>{temperature}</h2>
      <span className='text-[36px] font-light pt-[6px]'>
        {TEMPERATURE_DEGREE_SIGN}
      </span>
    </div>
  )
})
