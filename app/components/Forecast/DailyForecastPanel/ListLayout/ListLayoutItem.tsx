import { FC, useMemo } from 'react'

import ForecastStore from 'stores/ForecastStore'
import { WeatherReport } from 'modules/weather/WeatherReport'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'
import { capitalizeString } from 'helpers/capitalizeString'
import { TEMPERATURE_DEGREE_SIGN } from 'constants/weather'

export const ListLayoutItem: FC<IWeatherReport> = report => {
  const { hoursTime, temperature, weatherCondition } = useMemo(() => {
    return new WeatherReport(report)
  }, [report])

  return (
    <div
      className='flex py-[16px] mb-[12px] px-[6px] rounded-[8px] font-medium cursor-pointer'
      onClick={() => ForecastStore.setSelectedDailyForecastReport(report)}
    >
      <span className='flex items-center justify-center w-[30px] mr-[24px] text-[14px] font-bold'>
        {hoursTime}
      </span>
      <span>{capitalizeString(weatherCondition)}</span>
      <div className='flex ml-auto'>
        <span>{temperature}</span>
        <span className='text-gray-500 text-[14px] pt-[2px] ml-px'>
          {TEMPERATURE_DEGREE_SIGN}
        </span>
      </div>
    </div>
  )
}
