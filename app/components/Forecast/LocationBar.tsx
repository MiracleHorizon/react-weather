import ForecastStore from 'stores/ForecastStore'
import { InternationalParams } from 'modules/InternationalParams'

export const LocationBar = () => {
  const { city, countryCode } = ForecastStore.location

  return (
    <div className='text-center'>
      <h3 className='text-[20px] text-gray-500'>
        {city}, {InternationalParams.getRegionNameFromRegionCode(countryCode)}
      </h3>
    </div>
  )
}
