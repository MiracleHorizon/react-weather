import { FC } from 'react'

import { Temperature } from 'modules/weather/Temperature'
import { DEGREE_SIGN } from 'utils/constants/weather'

export const TemperatureBar: FC<Props> = ({ temperature, iconClassName }) => (
  <div className='w-full flex flex-col items-center justify-center'>
    <i className={`wi ${iconClassName} text-[40px]`} />
    <div className='flex'>
      <h2 className='block max-h-[85px] text-[50px]'>{temperature.value}</h2>
      <span className='text-[30px] ml-[2px] mt-[4px] font-extralight'>
        {DEGREE_SIGN}
      </span>
    </div>
  </div>
)

interface Props {
  temperature: Temperature
  iconClassName: string
}
