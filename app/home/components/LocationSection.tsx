import { IntlDisplayNamesHandler } from '@utils/IntlDisplayNamesHandler'
import type { ReportLocation } from '@models/ReportLocation'

export default function LocationSection({ city, countryCode }: ReportLocation) {
  return (
    <section className='text-center'>
      <article>
        <span className='text-[18px] text-gray-400'>
          {city},{' '}
          {IntlDisplayNamesHandler.getRegionNameByRegionCode(countryCode)}
        </span>
      </article>
    </section>
  )
}
