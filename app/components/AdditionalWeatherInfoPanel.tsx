import { FC } from 'react'
import classNames from 'classnames'

import { IAdditionalWeatherInfoItem } from 'models/weather/IAdditionalWeatherInfoItem'

export const AdditionalWeatherInfoPanel: FC<Props> = ({ infoArray }) => (
  <div className='grid grid-rows-rep-2 grid-cols-rep-2 gap-y-[10px]'>
    {infoArray.map(({ title, value, postfix }, index) => (
      <div
        key={title}
        className={classNames(
          'flex items-center justify-between text-[14px]',
          index % 2 === 0 ? 'mr-[10px]' : 'ml-[10px]'
        )}
      >
        <h5 className='font-medium text-gray-900'>{title}</h5>
        <div>
          <span className='mr-[2px] text-gray-400 text-[13px]'>{value}</span>
          <span className='text-gray-300 text-[12px]'>{postfix}</span>
        </div>
      </div>
    ))}
  </div>
)

interface Props {
  infoArray: IAdditionalWeatherInfoItem[]
}
