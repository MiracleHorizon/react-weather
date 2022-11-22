import { FC, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import ForecastStore from 'stores/ForecastStore'
import { DateHandler } from 'modules/DateHandler'
import { ForecastTemperature } from 'modules/forecast/ForecastTemperature'
import { IDailyForecast } from 'types/weather'

export const ForecastItem: FC<IDailyForecast> = observer(
  ({ identifier, data }) => {
    const dateString = data[0].dt_txt
    const { selectedDailyForecast } = ForecastStore
    const isSelected = selectedDailyForecast.identifier === identifier

    const temperature = useMemo(() => new ForecastTemperature(data), [data])

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
        <span>{temperature.getAverageTemperature()}</span>
        <span className='font-semibold text-[18px] mt-[12px]'>
          {dateHandler.getDayOfTheWeek()[0]}
        </span>
      </li>
    )
  }
)
