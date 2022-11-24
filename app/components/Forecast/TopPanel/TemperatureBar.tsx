import { useMemo } from 'react'
import { observer } from 'mobx-react-lite'

import ForecastStore from 'stores/ForecastStore'
import { WeatherReport } from 'modules/weather/WeatherReport'
import { TEMPERATURE_DEGREE_SIGN } from 'constants/weather'

export const TemperatureBar = observer(() => {
  const { selectedDailyForecastReport } = ForecastStore

  const { temperature, weatherIconClassName } = useMemo(() => {
    return new WeatherReport(selectedDailyForecastReport)
  }, [selectedDailyForecastReport])

  return (
    <div className='flex flex-col items-center justify-center mb-[6px]'>
      <i className={`wi ${weatherIconClassName} text-[40px]`} />
      <div className='flex pl-[14px]'>
        <h2 className='block max-h-[85px] text-[60px] font-medium mobile:text-[50px]'>
          {temperature}
        </h2>
        <span className='text-[36px] font-light ml-[3px]'>
          {TEMPERATURE_DEGREE_SIGN}
        </span>
      </div>
    </div>
  )
})
