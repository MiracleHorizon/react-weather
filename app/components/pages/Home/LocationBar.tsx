import { FC } from 'react'

import { InternationalParams } from 'modules/InternationalParams'

export const LocationBar: FC<Props> = ({ city, countryCode }) => (
  <div className='text-center'>
    <h3 className='text-[18px] text-gray-500'>
      {city}, {InternationalParams.getRegionNameFromRegionCode(countryCode)}
    </h3>
  </div>
)

interface Props {
  city: string
  countryCode: string
}
