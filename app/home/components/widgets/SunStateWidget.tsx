import { useMemo } from 'react'
import Image from 'next/image'

import type { SunState } from '@models/SunState'
import sunriseSvg from '@public/svg/sunrise.svg'
import sunsetSvg from '@public/svg/sunset.svg'
import { OPEN_WEATHER_TIMESTAMP_MULTIPLIER } from '@constants/api'

export default function SunStateWidget({ sunrise, sunset }: SunState) {
  const sunStateItems = useMemo(() => {
    return [
      { title: 'Sunrise', value: sunrise, imagePath: sunriseSvg.src },
      { title: 'Sunset', value: sunset, imagePath: sunsetSvg.src }
    ]
  }, [sunrise, sunset])

  return (
    <section className='mt-auto flex items-center justify-between text-[14px] text-gray-100 [440px-max]:flex-col [440px-max]:justify-center'>
      {sunStateItems.map(({ title, value, imagePath }) => (
        <div key={title} className='flex items-end'>
          <span className='text-[13px] text-gray-700 dark:text-gray-300'>
            {title}:{' '}
            {Intl.DateTimeFormat('en-EN', {
              hourCycle: 'h12',
              hour: '2-digit',
              minute: '2-digit'
            }).format(new Date(value * OPEN_WEATHER_TIMESTAMP_MULTIPLIER))}
          </span>
          <Image
            src={imagePath}
            alt={title}
            width={28}
            height={28}
            className='ml-[6px] opacity-70'
          />
        </div>
      ))}
    </section>
  )
}
