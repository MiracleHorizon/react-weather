import { useMemo } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import { DateFns } from '@libs/DateFns'
import { DEGREE_SIGN } from '@constants/units'
import { WeatherForecastReport } from '@entities/weather'
import { useForecastStore } from '@stores/forecastStore'
import { formatNumberWithOneDecimal } from '@helpers/formatNumberWithOneDecimal'
import type { ForecastCity, WeatherForecastReportModel } from '@models/weather'

export default function DailyWeatherReportItem({
  report,
  forecastCity,
  isSelected
}: Props) {
  const { dateTimestamp, description, temperature, iconClassName } =
    useMemo(() => {
      return new WeatherForecastReport({
        report,
        forecastCity
      })
    }, [report, forecastCity])

  function handleSelectWeatherReport() {
    useForecastStore.selectWeatherReportByTimestamp(report.dt)
  }

  return (
    <li
      className={twMerge([
        'flex',
        'w-full',
        'cursor-pointer',
        'items-center',
        'justify-start',
        'rounded-xl',
        'px-[12px]',
        'py-[8px]',
        'shadow',
        'transition-colors',
        'ease-out',
        'duration-[50ms]',
        'hover:bg-gray-100',
        'active:bg-gray-200',
        'dark:bg-gray-300',
        'dark:hover:bg-gray-200',
        'dark:active:bg-gray-100',
        isSelected &&
          twJoin([
            'bg-gray-100',
            'hover:bg-gray-200',
            'active:bg-gray-300',
            'dark:bg-gray-200',
            'dark:hover:bg-gray-100',
            'dark:active:bg-gray-50'
          ])
      ])}
      onClick={handleSelectWeatherReport}
    >
      <article>
        <span className='text-[14px] [440px-max]:text-[13px]'>
          {DateFns.formatDate(dateTimestamp, 'HH:mm')},{' '}
          {formatNumberWithOneDecimal(temperature.temp)}
          {DEGREE_SIGN}
        </span>
      </article>
      <article className='ml-auto max-w-[60%] truncate'>
        <span className='text-[16px] [440px-max]:text-[14px]'>
          {description}
        </span>
        <i
          className={twJoin([
            'wi',
            'wi-fw',
            'w-[40px]',
            'text-[20px]',
            '[440px-max]:text-[18px]',
            iconClassName
          ])}
        />
      </article>
    </li>
  )
}

interface Props {
  report: WeatherForecastReportModel
  forecastCity: ForecastCity
  isSelected: boolean
}
