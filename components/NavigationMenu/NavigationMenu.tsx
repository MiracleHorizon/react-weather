import { memo } from 'react'

import NavigationMenuItem from './NavigationMenuItem'
import { Routes } from '@router/Routes'
import homeSvg from '@public/svg/home.svg'
import cogSvg from '@public/svg/cog.svg'

const NAVIGATION_CATEGORIES = [
  { href: Routes.HOME, imagePath: homeSvg.src, title: 'Home' },
  {
    href: Routes.FORECAST,
    icon: <i className='wi wi-day-cloudy-gusts text-[24px]' />
  },
  { href: Routes.SETTINGS, imagePath: cogSvg.src }
]

function NavigationMenu() {
  return (
    <nav className='flex h-[70px]'>
      <ul className='flex w-full items-center justify-between'>
        {NAVIGATION_CATEGORIES.map(navigationCategory => (
          <NavigationMenuItem
            // @ts-ignore
            key={navigationCategory.href}
            {...navigationCategory}
          />
        ))}
      </ul>
    </nav>
  )
}

export default memo(NavigationMenu)
