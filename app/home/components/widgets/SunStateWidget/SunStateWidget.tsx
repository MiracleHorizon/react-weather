import { useMemo } from 'react'

import SunsetSvg from '@ui/svg/SunsetSvg'
import SunriseSvg from '@ui/svg/SunriseSvg'
import SunStateWidgetItem from './SunStateWidgetItem'
import { getThemeCookie } from '@lib/cookies/getThemeCookie'
import type { SunState } from '@models/SunState'

export default function SunStateWidget({ sunrise, sunset }: SunState) {
  const { withDarkMode } = getThemeCookie()

  const sunStateItems = useMemo(() => {
    const iconProps = {
      rootClassName:
        'ml-[6px] [440px-max]:transform [440px-max]:translate-y-[1px]',
      pathClassName: withDarkMode ? 'fill-gray-300' : 'fill-gray-700'
    }

    return [
      {
        title: 'Sunrise',
        dateTimestamp: sunrise,
        icon: <SunriseSvg {...iconProps} />
      },
      {
        title: 'Sunset',
        dateTimestamp: sunset,
        icon: <SunsetSvg {...iconProps} />
      }
    ]
  }, [sunrise, sunset, withDarkMode])

  return (
    <section className='mt-auto flex w-full items-center justify-between text-[14px] text-gray-100 [440px-max]:flex-col [440px-max]:justify-center [440px-max]:px-[10px] [650px-max]:justify-around'>
      {sunStateItems.map(item => (
        <SunStateWidgetItem key={item.title} {...item} />
      ))}
    </section>
  )
}
