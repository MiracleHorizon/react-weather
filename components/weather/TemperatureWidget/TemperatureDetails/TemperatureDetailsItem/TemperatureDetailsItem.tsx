import { twJoin } from 'tailwind-merge'
import type { ReactNode } from 'react'

import { DEGREE_SIGN } from '@constants/units'
import { formatNumberWithOneDecimal } from '@helpers/formatNumberWithOneDecimal'
import styles from './TemperatureDetailsItem.module.css'

export default function TemperatureDetailsItem({ value }: Props) {
  return (
    <div
      className={twJoin(
        'flex items-end text-[19px] [550px-max]:text-[17px]',
        styles.item
      )}
    >
      <article className='block h-[23px]'>
        {formatNumberWithOneDecimal(value)}
        {DEGREE_SIGN}
      </article>
    </div>
  )
}

interface Props {
  value: number
  icon: ReactNode
}
