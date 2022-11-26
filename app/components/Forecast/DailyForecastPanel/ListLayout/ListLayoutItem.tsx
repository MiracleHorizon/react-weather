import { FC, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import classNames from 'classnames'

import ForecastStore from 'stores/ForecastStore'
import { TriangleSvg } from 'components/ui/svg'
import { capitalizeString } from 'helpers/capitalizeString'
import { DEGREE_SIGN } from 'constants/weather'
import { ForecastWeatherReport } from '../../../../modules/weather/reports/ForecastWeatherReport'
import { IForecastWeatherReport } from '../../../../models/weather/reports/IForecastWeatherReport'

export const ListLayoutItem: FC<IForecastWeatherReport> = observer(report => {
  const { hoursTime, temperature, weatherCondition } = useMemo(() => {
    return new ForecastWeatherReport(report)
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
      <span className='flex items-center justify-center w-[30px] ml-[6px] text-[14px] font-bold'>
        {hoursTime}
      </span>
      <span className='ml-[34px]'>{capitalizeString(weatherCondition)}</span>
      <div className='flex ml-auto'>
        <span>{temperature.temperatureValue}</span>
        <span className='text-gray-500 text-[14px] pt-[2px] ml-px'>
          {DEGREE_SIGN}
        </span>
      </div>
    </div>
  )
})
