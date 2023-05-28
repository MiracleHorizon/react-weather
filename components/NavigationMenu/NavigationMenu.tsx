import HomeModernIcon from '@heroicons/react/24/outline/HomeModernIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import { twMerge } from 'tailwind-merge'

import NavigationMenuItem from './NavigationMenuItem'
import { Routes } from '@router/Routes'
import type { NavigationCategory } from '@models/NavigationCategory'
import styles from './NavigationMenu.module.css'

const navigationCategories: NavigationCategory[] = [
  {
    title: 'Home',
    href: Routes.HOME,
    icon: <HomeModernIcon className={styles.icon} />
  },
  {
    title: 'Forecast',
    href: Routes.FORECAST,
    icon: <ChartBarIcon className={styles.icon} />
  },
  {
    title: 'Moon',
    href: Routes.MOON,
    icon: <MoonIcon className={styles.icon} />
  },
  {
    title: 'Settings',
    href: Routes.SETTINGS,
    icon: <Cog6ToothIcon className={styles.icon} />
  }
]

export default function NavigationMenu() {
  const mobileStyles =
    '[550px-max]:mt-0 [550px-max]:border-t-0 [550px-max]:w-[calc(100%-12px)] [550px-max]:shadow-lg [550px-max]:fixed [550px-max]:bottom-[8px] [550px-max]:left-1/2 [550px-max]:translate-x-[-50%] [550px-max]:transform [550px-max]:right-1/2 [550px-max]:rounded-2xl'

  return (
    <menu
      className={twMerge(
        mobileStyles,
        'z-10 mt-[20px] h-[50px] w-full rounded-b-3xl border-t-[1px] border-t-gray-200 bg-white dark:bg-gray-500'
      )}
    >
      <nav className='h-full w-full px-[24px]'>
        <ul className='flex h-full w-full items-center justify-between'>
          {navigationCategories.map(navigationCategory => (
            <NavigationMenuItem
              key={navigationCategory.href}
              {...navigationCategory}
            />
          ))}
        </ul>
      </nav>
    </menu>
  )
}
