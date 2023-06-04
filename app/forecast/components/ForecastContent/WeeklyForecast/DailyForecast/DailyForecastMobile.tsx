import { twJoin } from 'tailwind-merge'

import { DateFns } from '@libs/DateFns'
import { DEGREE_SIGN } from '@constants/units'
import { formatNumberWithOneDecimal } from '@helpers/formatNumberWithOneDecimal'

export default function DailyForecastMobile({
  temperature,
  dateTimestamp,
  iconClassName,
  isSelected,
  handleSelectDailyForecast
}: Props) {
  const weekday = DateFns.formatDate(dateTimestamp, 'eeee')

  return (
    <li
      className={twJoin([
        'hidden w-full cursor-pointer justify-between rounded-lg px-[8px] py-[8px] text-gray-700 shadow hover:bg-gray-100 active:bg-gray-200 [&:not(&:last-of-type)]:mb-[8px] [440px-max]:flex',
        isSelected && 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'
      ])}
      onClick={handleSelectDailyForecast}
    >
      <article className='flex items-center justify-start'>
        <i
          className={`wi wi-fw mr-[4px] w-[40px] text-[28px] [550px-max]:text-[22px] ${iconClassName}`}
        />
        <span className='text-[15px]'>{weekday}</span>
      </article>
      <article>
        <span className='text-[14px]'>
          {formatNumberWithOneDecimal(temperature)}
          {DEGREE_SIGN}
        </span>
      </article>
    </li>
  )
}

interface Props {
  temperature: number
  dateTimestamp: number
  iconClassName: string
  isSelected: boolean
  handleSelectDailyForecast: VoidFunction
}
