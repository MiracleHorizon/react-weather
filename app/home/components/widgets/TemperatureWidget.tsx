import { twJoin } from 'tailwind-merge'

import { DEGREE_SIGN } from '@constants/units'

export default function TemperatureWidget({
  weatherIconClassName,
  mainTemperature
}: Props) {
  return (
    <section
      className={twJoin([
        'flex',
        'w-full',
        'flex-col',
        'items-center',
        'justify-center',
        'text-gray-700',
        'dark:text-gray-200'
      ])}
    >
      <i className={`wi ${weatherIconClassName} ml-[-2px] text-[40px]`} />
      <article className='flex items-start justify-center'>
        <h2 className='block max-h-[85px] text-[50px]'>{mainTemperature}</h2>
        <span className='ml-[2px] mt-[4px] text-[30px] font-light'>
          {DEGREE_SIGN}
        </span>
      </article>
    </section>
  )
}

interface Props {
  mainTemperature: string
  weatherIconClassName: string
}
