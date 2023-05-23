import { IntlDisplayNamesHandler } from '@utils/IntlDisplayNamesHandler'
import type { ReportLocation } from '@models/ReportLocation'

export default function LocationWidget({ city, countryCode }: ReportLocation) {
  return (
    <section className='mt-[-8px] text-center'>
      <article>
        <span className='text-[18px] text-gray-400'>
          {city},{' '}
          {IntlDisplayNamesHandler.getRegionNameByRegionCode(countryCode)}
        </span>
      </article>
    </section>
  )
}
