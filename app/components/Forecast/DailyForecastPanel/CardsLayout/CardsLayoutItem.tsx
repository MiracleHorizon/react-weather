import { FC, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import ForecastStore from 'stores/ForecastStore'
import { WeatherReport } from 'modules/weather/reports/WeatherReport'
import { IForecastWeatherReport } from 'models/weather/reports/IForecastWeatherReport'
import { DEGREE_SIGN } from 'constants/weather'

export const CardsLayoutItem: FC<IForecastWeatherReport & { index: number }> =
  observer(({ index, ...report }) => {
    const { hoursTimeString, temperature } = useMemo(() => {
      return new WeatherReport(report)
    }, [report])

    return (
      <div
        className='w-[31%] max-w-[190px] h-full rounded-[20px] cursor-pointer text-center text-white flex flex-col justify-between'
        onClick={() => ForecastStore.setSelectedDailyForecastReport(report)}
      >
        <div
          className={classNames('h-1/2 rounded-t-[20px] pt-[24px]', {
            ['bg-[#f5895b]']: index === 0,
            ['bg-[#b46490]']: index === 1,
            ['bg-[#49577a]']: index === 2,
          })}
        >
          <span className='font-medium text-[16px]'>{hoursTimeString}</span>
        </div>
        <div
          className={classNames(
            'h-1/2 rounded-b-[20px] pb-[36px] flex justify-center',
            {
              ['bg-[#e06f7b]']: index === 0,
              ['bg-[#7b5f8f]']: index === 1,
              ['bg-[#2e4757]']: index === 2,
            }
          )}
        >
          <div className='flex mt-auto'>
            <span>{temperature.temperatureValue}</span>
            <span>{DEGREE_SIGN}</span>
          </div>
        </div>
      </div>
    )
  })
