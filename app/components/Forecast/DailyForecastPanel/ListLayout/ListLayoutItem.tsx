import { FC, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import ForecastStore from 'stores/ForecastStore'
import { TriangleSvg } from 'components/ui/svg'
import { WeatherReport } from 'modules/weather/WeatherReport'
import { IWeatherReport } from 'models/weather/forecast/IWeatherReport'
import { capitalizeString } from 'helpers/capitalizeString'
import { TEMPERATURE_DEGREE_SIGN } from 'constants/weather'

export const ListLayoutItem: FC<IWeatherReport> = observer(report => {
  const { hoursTime, temperature, weatherCondition } = useMemo(() => {
    return new WeatherReport(report)
  }, [report])

  const isSelected =
    report.dt_txt === ForecastStore.selectedDailyForecastReport.dt_txt

  return (
    <div
      className={classNames(
        'flex items-center py-[16px] mb-[12px] px-[6px] rounded-[8px] font-medium cursor-pointer',
        { ['pl-[20px]']: !isSelected }
      )}
      onClick={() => ForecastStore.setSelectedDailyForecastReport(report)}
    >
      {isSelected && <TriangleSvg className='rotate-90 w-[14px] h-[14px]' />}
      <span className='flex items-center justify-center w-[30px] mr-[34px] text-[14px] font-bold'>
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
})
