import { DateFns } from '@libs/DateFns'

// TODO: Check timestamps diff with timezone offset
export default function DateWidget({ dateTimestamp, dateFormat }: Props) {
  return (
    <article className='text-center'>
      <span className='text-[14px] text-gray-500 dark:text-gray-300'>
        {DateFns.formatDate(dateTimestamp, dateFormat)}
      </span>
    </article>
  )
}

interface Props {
  dateTimestamp: number
  dateFormat: string
}
