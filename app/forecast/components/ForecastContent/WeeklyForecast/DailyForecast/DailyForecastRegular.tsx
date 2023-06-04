import { twJoin } from 'tailwind-merge'

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
  const width = Math.floor(100 / totalDays) + '%'

  return (
    <li
      style={{ width }}
      className={twJoin([
        'h-[110px]',
        'max-w-[100px]',
        'cursor-pointer',
        'rounded-2xl',
        'pt-[8px]',
        'shadow',
        'hover:bg-gray-100',
        'active:bg-gray-200',
        '[440px-max]:hidden',
        isSelected && 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'
      ])}
      onClick={handleSelectDailyForecast}
    >
      <article className='flex h-full w-full flex-col items-center justify-center text-gray-700 [440px-max]:flex-row [440px-max]:justify-between'>
        <i
          className={`wi text-[28px] [550px-max]:text-[22px] ${iconClassName}`}
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
