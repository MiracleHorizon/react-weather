import { useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import ForecastStore from 'stores/ForecastStore'
import { AdditionalWeatherInfoPanel } from 'components/AdditionalWeatherInfoPanel'
import { DEGREE_SIGN } from 'utils/constants/weather'

export const DailyForecastReportBar = observer(() => {
  const { temperature, iconClassName, date, additionalInfoArray } =
    ForecastStore.selectedWeatherReport

  const temperatureData = useMemo(() => {
    return [temperature.value, temperature.feelsLike]
  }, [temperature])

  return (
    <div className='mt-[30px]'>
      <div className='flex items-center justify-between mb-[30px]'>
        <div className='flex items-center'>
          <i
            className={`wi ${iconClassName} text-[24px] mb-[2px] text-blue-900`}
          />
          <span className='ml-[20px] block text-[18px]'>
            {date.getDayOfTheWeek()}
          </span>
        </div>
        <div className='flex'>
          {temperatureData.map((value, index) => (
            <div
              key={`${value} in ${index}`}
              className={classNames(
                'flex',
                index === temperatureData.length - 1 &&
                  'ml-[10px] text-gray-300'
              )}
            >
              <span
                className={classNames(
                  'text-[18px]',
                  index === temperatureData.length - 1 && 'font-normal'
                )}
              >
                {value}
              </span>
              <span className='font-light text-[14px] mt-[1px] ml-[1px]'>
                {DEGREE_SIGN}
              </span>
            </div>
          ))}
        </div>
      </div>
      <AdditionalWeatherInfoPanel infoArray={additionalInfoArray} />
    </div>
  )
})
