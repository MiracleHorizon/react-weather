import { useMemo } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import { DateFns } from '@libs/DateFns'
import { DEGREE_SIGN } from '@constants/units'
import { formatNumberWithOneDecimal } from '@helpers/formatNumberWithOneDecimal'

export default function DailyForecastRegular({
  isSelected,
  iconClassName,
  temperature,
  dateTimestamp,
  totalDays,
  handleSelectDailyForecast
}: Props) {
  const weekday = DateFns.formatDate(dateTimestamp, 'eee')
  // NOTE: TailwindCSS не поддерживает динамическое изменение параметров
  const styles = useMemo(() => {
    const MAX_WIDTH_PERCENT: number = 100
    const width = Math.floor(MAX_WIDTH_PERCENT / totalDays) + '%'
    return { width }
  }, [totalDays])

  return (
    <li
      style={styles}
      className={twMerge([
        'h-[110px]',
        'max-w-[100px]',
        'cursor-pointer',
        'rounded-2xl',
        'pt-[8px]',
        'shadow',
        'transition-colors',
        'ease-out',
        'duration-[50ms]',
        'hover:bg-gray-100',
        'active:bg-gray-200',
        'dark:bg-gray-300',
        'dark:hover:bg-gray-200',
        'dark:active:bg-gray-100',
        '[440px-max]:hidden',
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
      onClick={handleSelectDailyForecast}
    >
      <article
        className={twJoin([
          'flex',
          'h-full',
          'w-full',
          'flex-col',
          'items-center',
          'justify-center',
          'text-gray-700',
          '[440px-max]:flex-row',
          '[440px-max]:justify-between'
        ])}
      >
        <i
          className={twJoin(
            'wi text-[28px] [550px-max]:text-[22px]',
            iconClassName
          )}
        />
        <span className='mb-[2px] mt-[8px] text-[18px] font-light [550px-max]:text-[16px]'>
          {formatNumberWithOneDecimal(temperature)}
          {DEGREE_SIGN}
        </span>
        <span className='text-[16px] [550px-max]:text-[14px]'>{weekday}</span>
      </article>
    </li>
  )
}

interface Props {
  totalDays: number
  temperature: number
  dateTimestamp: number
  iconClassName: string
  isSelected: boolean
  handleSelectDailyForecast: VoidFunction
}
