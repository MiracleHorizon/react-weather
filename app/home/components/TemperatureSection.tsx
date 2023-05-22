import { DEGREE_SIGN } from '@constants/units'
import type { Temperature } from '@entities/Temperature'

export default function TemperatureSection({
  weatherIconClassName,
  temperature
}: Props) {
  return (
    <section className='flex w-full flex-col items-center justify-center text-gray-700 dark:text-gray-300'>
      <i className={`wi ${weatherIconClassName} ml-[-2px] text-[40px]`} />
      <main className='flex items-start justify-center'>
        <h2 className='block max-h-[85px] text-[50px]'>{temperature.main}</h2>
        <span className='ml-[2px] mt-[4px] text-[30px] font-light'>
          {DEGREE_SIGN}
        </span>
      </main>
    </section>
  )
}

interface Props {
  temperature: Temperature
  weatherIconClassName: string
}
