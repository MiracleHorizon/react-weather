import dynamic from 'next/dynamic'
import { twJoin } from 'tailwind-merge'

import WeeklyForecastListSkeleton from './WeeklyForecastListSkeleton'

const WeeklyForecastList = dynamic(() => import('./WeeklyForecastList'), {
  ssr: false,
  loading: () => <WeeklyForecastListSkeleton />
})

export default function WeeklyForecast() {
  return (
    <footer className='mt-[24px] w-full [440px-max]:mt-0'>
      <h3
        className={twJoin([
          'mb-[6px]',
          'hidden',
          'w-full',
          'text-center',
          'text-[20px]',
          'dark:text-gray-200',
          '[440px-max]:inline-block'
        ])}
      >
        Week
      </h3>
      <WeeklyForecastList />
    </footer>
  )
}
