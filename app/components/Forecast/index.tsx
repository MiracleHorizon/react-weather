import { useCallback, useMemo, useState } from 'react'

import ForecastStore from 'stores/ForecastStore'
import { ForecastItem } from './ForecastItem'
import { SelectedDayPanel } from './SelectedDayPanel'
import { IForecastSegment } from 'models/weather/forecast/IForecastSegment'
import { getForecastDaysFromForecastsList } from 'helpers/getForecastDaysFromForecastsList'

export const WeatherForecast = () => {
  const forecasts = useMemo(() => {
    return getForecastDaysFromForecastsList(ForecastStore.forecastList)
  }, [])

  const [selectedDay, setSelectedDay] = useState(forecasts[0])

  const handleSetSelectedDay = useCallback(
    (forecastDay: IForecastSegment[]) => {
      setSelectedDay(forecastDay)
    },
    []
  )

  // Todo переключение между прогнозами человек клавиатуру
  return (
    <div className='w-full h-screen bg-gray-900 px-[10px]'>
      <SelectedDayPanel day={selectedDay} />
      <ul>
        {forecasts.map((forecastDay, index) => (
          <ForecastItem
            key={index}
            forecastDay={forecastDay}
            handleSetSelectedDay={handleSetSelectedDay}
          />
        ))}
      </ul>
    </div>
  )
}
