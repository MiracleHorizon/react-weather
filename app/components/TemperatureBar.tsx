import { FC, memo, useMemo } from 'react'

import { WeatherReport } from 'modules/weather/reports/WeatherReport'
import { IWeatherReport } from 'models/weather/reports/IWeatherReport'
import { DEGREE_SIGN } from 'constants/weather'

export const TemperatureBar: FC<IWeatherReport> = memo(report => {
  const { temperature, iconClassName } = useMemo(() => {
    return new WeatherReport(report)
  }, [report])

  return (
    <div className='flex flex-col items-center justify-center mb-[6px]'>
      <i className={`wi ${iconClassName} text-[40px]`} />
      <div className='flex pl-[14px]'>
        <h2 className='block max-h-[85px] text-[60px] font-medium sm-max:text-[50px]'>
          {temperature.temperatureValue}
        </h2>
        <span className='text-[36px] font-light ml-[3px]'>{DEGREE_SIGN}</span>
      </div>
    </div>
  )
})
