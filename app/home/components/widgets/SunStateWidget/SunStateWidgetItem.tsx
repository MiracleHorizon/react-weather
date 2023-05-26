import Image from 'next/image'

import { OPEN_WEATHER_TIMESTAMP_MULTIPLIER } from '@constants/api'

export default function SunStateWidgetItem({
  title,
  imagePath,
  dateTimestamp
}: Props) {
  function formatDate() {
    const locale = 'en-US'
    const date = new Date(dateTimestamp * OPEN_WEATHER_TIMESTAMP_MULTIPLIER)
    const dateOptions: Intl.DateTimeFormatOptions = {
      hourCycle: 'h12',
      hour: '2-digit',
      minute: '2-digit'
    }

    return Intl.DateTimeFormat(locale, dateOptions).format(date)
  }

  const image = (
    <Image
      src={imagePath}
      alt={title}
      width={28}
      height={28}
      className='mb-[-1px] ml-[6px] opacity-70'
    />
  )

  const defaultJsx = (
    <article className='flex items-end [440px-max]:hidden'>
      <span className='text-[13px]'>
        {title}: {formatDate()}
      </span>
      {image}
    </article>
  )

  const smallScreenJsx = (
    <>
      <span className='hidden text-[12px] [440px-max]:inline'>{title}</span>
      <article className='hidden items-end [440px-max]:flex'>
        <span className='text-[11px]'>{formatDate()}</span>
        {image}
      </article>
    </>
  )

  return (
    <div className='text-gray-700 dark:text-gray-300 [440px-max]:flex [440px-max]:w-full [440px-max]:items-end [440px-max]:justify-between'>
      {defaultJsx}
      {smallScreenJsx}
    </div>
  )
}

interface Props {
  title: string
  imagePath: string
  dateTimestamp: number
}
