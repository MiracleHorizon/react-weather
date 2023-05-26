import { useMemo } from 'react'

import SunStateWidgetItem from './SunStateWidgetItem'
import type { SunState } from '@models/SunState'
import sunriseSvg from '@public/svg/sunrise.svg'
import sunsetSvg from '@public/svg/sunset.svg'

export default function SunStateWidget({ sunrise, sunset }: SunState) {
  const sunStateItems = useMemo(() => {
    return [
      { title: 'Sunrise', dateTimestamp: sunrise, imagePath: sunriseSvg.src },
      { title: 'Sunset', dateTimestamp: sunset, imagePath: sunsetSvg.src }
    ]
  }, [sunrise, sunset])

  return (
    <section className='mt-auto flex w-full items-center justify-between text-[14px] text-gray-100 [440px-max]:flex-col [440px-max]:justify-center [440px-max]:px-[10px] [650px-max]:justify-around'>
      {sunStateItems.map(item => (
        <SunStateWidgetItem key={item.title} {...item} />
      ))}
    </section>
  )
}
