import { IntlDisplayNamesHandler } from '@utils/IntlDisplayNamesHandler'
import type { ReportLocation } from '@models/ReportLocation'

export default function LocationSection({ city, countryCode }: ReportLocation) {
  return (
    <section className='text-center'>
      <h3 className='text-[18px] text-gray-400'>
        {city}, {IntlDisplayNamesHandler.getRegionNameByRegionCode(countryCode)}
      </h3>
    </section>
  )
}
