import { FC, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import ForecastStore from 'stores/ForecastStore'
import { DateHandler } from 'modules/DateHandler'
import { WeatherReport } from 'modules/weather/WeatherReport'
import { IDailyForecast } from 'types/weather'

export const ForecastItem: FC<IDailyForecast> = observer(
  ({ identifier, data }) => {
    const dateString = data[0].dt_txt
    const { selectedDailyForecast } = ForecastStore
    const isSelected = selectedDailyForecast.identifier === identifier

    const { weatherCondition, weatherIconClassName } = useMemo(
      () => new WeatherReport(data[0]),
      [data]
    )

    const dateHandler = useMemo(() => new DateHandler(dateString), [dateString])

    return (
      <li
        className={classNames(
          'flex flex-col items-center justify-center cursor-pointer',
          {
            ['text-gray-400']: !isSelected,
          }
        )}
        onClick={() =>
          ForecastStore.setSelectedDailyForecast({ identifier, data })
        }
      >
        <i className={`wi text-[24px] ${weatherIconClassName}`} />
        <span className='font-semibold text-[18px] mt-[12px]'>
          {dateHandler.getDayOfTheWeek()[0]}
        </span>
      </li>
    )
  }
)
