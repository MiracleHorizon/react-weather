import { FC, useMemo } from 'react'

import { ForecastTemperature } from 'modules/forecast/ForecastTemperature'
import { IForecastSegment } from 'models/weather/forecast/IForecastSegment'
import { TEMPERATURE_DEGREE_SIGN } from 'constants/weather'

export const ForecastTemperatureBar: FC<Props> = ({ forecastDay }) => {
  const forecastTemperature = useMemo(() => {
    return new ForecastTemperature(forecastDay)
  }, [forecastDay])

  return (
    <div className='ml-auto w-[85px] flex items-center justify-center'>
      <span className='text-white'>
        <strong className='font-semibold'>
          {forecastTemperature.getAverageMaxTemperature()}
        </strong>
        {TEMPERATURE_DEGREE_SIGN}
      </span>
      <span className='mx-[3px] text-gray-500'>/</span>
      <span className='text-[17px] text-gray-500'>
        {forecastTemperature.getAverageMinTemperature()}
        {TEMPERATURE_DEGREE_SIGN}
      </span>
    </div>
  )
}

interface Props {
  forecastDay: IForecastSegment[]
}
