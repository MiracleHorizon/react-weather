import ForecastStore from 'stores/ForecastStore'
import { InternationalParams } from 'modules/InternationalParams'

export const LocationBar = () => {
  const { city, countryCode } = ForecastStore.location

  return (
    <div className='text-center'>
      <h3 className='text-[18px] text-gray-400 font-medium'>
        {city}, {InternationalParams.getRegionNameFromRegionCode(countryCode)}
      </h3>
    </div>
  )
}
