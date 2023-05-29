import { twJoin } from 'tailwind-merge'

import { DEGREE_SIGN } from '@constants/units'

export default function TemperatureWidget({
  temperature,
  weatherIconClassName
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
      <i className={twJoin('wi ml-[-2px] text-[40px]', weatherIconClassName)} />
      <article className='flex items-start justify-center'>
        <h1 className='block h-[65px] text-[50px]'>{temperature}</h1>
        <span className='ml-[2px] mt-[4px] text-[30px] font-light'>
          {DEGREE_SIGN}
        </span>
      </article>
    </section>
  )
}

interface Props {
  temperature: string
  weatherIconClassName: string
}
