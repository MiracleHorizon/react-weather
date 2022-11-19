import { FC, memo, useMemo } from 'react'

import { ForecastTemperatureBar } from './ForecastTemperatureBar'
import { Forecast } from 'modules/forecast/Forecast'
import { DateHandler } from 'modules/DateHandler'
import { IForecastSegment } from 'models/weather/forecast/IForecastSegment'

export const ForecastItem: FC<Props> = memo(
  ({ forecastDay, handleSetSelectedDay }) => {
    const forecast = useMemo(() => {
      return new Forecast(forecastDay)
    }, [forecastDay])

    const dateHandler = useMemo(() => {
      return new DateHandler(forecast.forecastDateString)
    }, [forecast.forecastDateString])

    const dayOfTheWeek = dateHandler.getDayOfTheWeek()

    const setSelectedDay = () => handleSetSelectedDay(forecastDay)

    return (
      <li
        className='w-full mb-[6px] px-[8px] py-[12px] flex items-center cursor-pointer'
        onClick={setSelectedDay}
      >
        <div className='w-[100px]'>
          <span className='text-gray-400'>
            {dayOfTheWeek !== 'Today' ? dayOfTheWeek.slice(0, 3) : dayOfTheWeek}
          </span>
        </div>
        <div className='text-[18px]'>
          <span className='text-gray-400'>{forecast.getCloudsState()}</span>
        </div>
        <ForecastTemperatureBar forecastDay={forecastDay} />
      </li>
    )
  }
)

interface Props {
  forecastDay: IForecastSegment[]
  handleSetSelectedDay: (forecastDay: IForecastSegment[]) => void
}
