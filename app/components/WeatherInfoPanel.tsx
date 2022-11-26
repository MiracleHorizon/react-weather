import { FC, memo, useMemo } from 'react'

import { WeatherReport } from 'modules/weather/reports/WeatherReport'
import { IWeatherReport } from 'models/weather/reports/IWeatherReport'

export const WeatherInfoPanel: FC<IWeatherReport> = memo(weatherData => {
  const { additionalInfoArray } = useMemo(() => {
    return new WeatherReport(weatherData)
  }, [weatherData])

  return (
    <div className='gap-y-[10px] gap-x-[20px] grid grid-rows-rep-2 grid-cols-rep-2 pb-[4px] pt-[14px]'>
      {additionalInfoArray.map(({ title, value, postfix }) => (
        <div className='flex items-center h-max text-[14px]' key={title}>
          <h5 className='flex items-center justify-start w-[70px] font-bold mr-[8px]'>
            {title}
          </h5>
          <span>
            <strong className='text-gray-500 font-medium'>{value}</strong>{' '}
            <span className='text-gray-400'>{postfix}</span>
          </span>
        </div>
      ))}
    </div>
  )
})
