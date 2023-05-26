import { DateFns } from '@libs/DateFns'
import { OPEN_WEATHER_TIMESTAMP_MULTIPLIER } from '@constants/api'

export default function DateWidget({ dateTimestamp }: Props) {
  async function getFormattedDate() {
    const { format, locale } = await DateFns.importFormatAndLocale()
    const date = new Date(dateTimestamp * OPEN_WEATHER_TIMESTAMP_MULTIPLIER)
    const dateFormat = 'd MMMM, yyyy'

    return format(date, dateFormat, {
      locale,
      weekStartsOn: 1
    })
  }

  return (
    <section>
      <article className='text-center'>
        <span className='text-[14px] text-gray-400'>
          {getFormattedDate().catch(() => new Date().toLocaleDateString())}
        </span>
      </article>
    </section>
  )
}

interface Props {
  dateTimestamp: number
}
