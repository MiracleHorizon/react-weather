import { DateFns } from '@libs/DateFns'

export default function DateWidget({ dateTimestamp, dateFormat }: Props) {
  async function getFormattedDate() {
    const { format, locale } = await DateFns.importFormatAndLocale()
    return format(new Date(dateTimestamp), dateFormat, {
      locale,
      weekStartsOn: 1
    })
  }

  return (
    <article className='text-center'>
      <span className='text-[14px] text-gray-500 dark:text-gray-300'>
        {getFormattedDate().catch(() => new Date().toLocaleDateString())}
      </span>
    </article>
  )
}

interface Props {
  dateTimestamp: number
  dateFormat: string
}
