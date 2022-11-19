import { FC, useMemo } from 'react'

import { Forecast } from 'modules/forecast/Forecast'
import { DateHandler } from 'modules/DateHandler'
import { ForecastWeather } from 'modules/forecast/ForecastWeather'
import { ForecastTemperature } from 'modules/forecast/ForecastTemperature'
import { IForecastSegment } from 'models/weather/forecast/IForecastSegment'
import { TEMPERATURE_DEGREE_SIGN } from 'constants/weather'

// Todo Сделать всплывающее модальное окно с подробной информацией о температуре

export const TemperatureBar: FC<{ day: IForecastSegment[] }> = ({ day }) => {
  const forecast = useMemo(() => new Forecast(day), [day])

  const weather = useMemo(() => new ForecastWeather(day), [day])

  const temperature = useMemo(() => new ForecastTemperature(day), [day])

  const dateHandler = useMemo(() => {
    return new DateHandler(forecast.forecastDateString)
  }, [forecast.forecastDateString])

  return (
    <div className='py-[18px]'>
      <header>
        <h3 className='text-white text-center text-[24px]'>
          {dateHandler.getDayOfTheWeek()}
        </h3>
      </header>
      <div className='flex items-center justify-center'>
        <h1 className='text-[70px] text-white text-center font-bold'>
          {temperature.getAverageTemperature()}
        </h1>
        <span className='font-semibold ml-[12px] mr-[8px] text-[40px] mb-[4px] text-gray-400'>
          /
        </span>
        <h2 className='font-semibold text-[40px] text-gray-400'>
          {temperature.getAverageMinTemperature()}
          {TEMPERATURE_DEGREE_SIGN}
        </h2>
      </div>
      <div className='text-center'>
        <span className='text-[18px] text-gray-300'>
          {weather.getCloudsState()}
        </span>
      </div>
    </div>
  )
}
