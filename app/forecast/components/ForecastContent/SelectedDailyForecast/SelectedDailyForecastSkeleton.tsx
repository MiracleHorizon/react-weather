import { twJoin } from 'tailwind-merge'

export default function SelectedDailyForecastSkeleton() {
  const animationStyles = 'animate-pulse bg-gray-300 dark:bg-neutral-400'

  return (
    <div className={twJoin('w-full rounded-2xl')}>
      <div className={twJoin('h-[30px] w-full rounded-lg', animationStyles)} />
      <div
        className={twJoin(
          'mt-[16px] h-[140px] w-full rounded-xl',
          animationStyles
        )}
      />
      <div
        className={twJoin(
          'mt-[16px] h-[200px] w-full rounded-2xl',
          animationStyles
        )}
      />
    </div>
  )
}
