import { twJoin } from 'tailwind-merge'

import { DEGREE_SIGN } from '@constants/units'
import { formatNumberWithOneDecimal } from '@helpers/formatNumberWithOneDecimal'

export default function MainTemperature({
  temperature,
  temperaturePostfix
}: Props) {
  return (
    <div className='relative flex items-start justify-center'>
      <h1
        className={twJoin([
          'block',
          'h-[65px]',
          'text-[46px]',
          '[440px-max]:h-[45px]',
          '[440px-max]:text-[36px]',
          '[550px-441px]:h-[55px]',
          '[550px-441px]:text-[40px]'
        ])}
      >
        {formatNumberWithOneDecimal(temperature)}
      </h1>
      <article className='absolute right-[-22px] top-[4px]'>
        <span className='text-[22px] font-light'>{DEGREE_SIGN}</span>
        <span>{temperaturePostfix}</span>
      </article>
    </div>
  )
}

interface Props {
  temperature: number
  temperaturePostfix: string
}
