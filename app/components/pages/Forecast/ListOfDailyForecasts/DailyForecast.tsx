import { FC, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import ForecastStore from 'stores/ForecastStore'
import { DateHandler } from 'modules/DateHandler'
import { WeatherReport } from 'modules/weather/reports/WeatherReport'
import { IDailyForecast } from 'models/weather/IDailyForecast'
import { getMiddleArrayElement } from 'utils/helpers/getMiddleArrayElement'

export const DailyForecast: FC<IDailyForecast> = observer(
  ({ identifier, data }) => {
    const isSelected = ForecastStore.checkIsForecastSelected(identifier)

    const middleDailyReport = useMemo(() => {
      return getMiddleArrayElement(data)
    }, [data])

    const { iconClassName } = useMemo(() => {
      return new WeatherReport(middleDailyReport)
    }, [middleDailyReport])

    const dateHandler = useMemo(() => {
      return new DateHandler(middleDailyReport.dt_txt)
    }, [middleDailyReport.dt_txt])

    return (
      <li
        className={classNames(
          'flex flex-col items-center justify-center cursor-pointer',
          { ['text-gray-300']: !isSelected }
        )}
        onClick={() => ForecastStore.setDailyForecast({ identifier, data })}
      >
        <i className={`wi ${iconClassName}`} />
        <span className='text-[17px] mt-[12px]'>
          {dateHandler.getDayOfTheWeek()[0]}
        </span>
      </li>
    )
  }
)
