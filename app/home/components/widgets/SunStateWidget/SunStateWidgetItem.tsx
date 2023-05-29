import { twJoin } from 'tailwind-merge'
import type { ReactNode } from 'react'

export default function SunStateWidgetItem({
  title,
  icon,
  dateTimestamp
}: Props) {
  function formatDate() {
    const locale = 'en-US'
    const date = new Date(dateTimestamp)
    const dateOptions: Intl.DateTimeFormatOptions = {
      hourCycle: 'h12',
      hour: '2-digit',
      minute: '2-digit'
    }

    return Intl.DateTimeFormat(locale, dateOptions).format(date)
  }

  const defaultJsx = (
    <article className='flex items-end [440px-max]:hidden'>
      <span className='text-[14px]'>
        {title}: {formatDate()}
      </span>
      {icon}
    </article>
  )

  const smallScreenJsx = (
    <>
      <span className='hidden text-[13px] [440px-max]:inline'>{title}</span>
      <article className='hidden items-end [440px-max]:flex'>
        <span className='text-[12px]'>{formatDate()}</span>
        {icon}
      </article>
    </>
  )

  return (
    <div
      className={twJoin([
        'text-gray-700',
        'dark:text-gray-300',
        '[440px-max]:flex',
        '[440px-max]:w-full',
        '[440px-max]:items-end',
        '[440px-max]:justify-between'
      ])}
    >
      {defaultJsx}
      {smallScreenJsx}
    </div>
  )
}

interface Props {
  title: string
  icon: ReactNode
  dateTimestamp: number
}
