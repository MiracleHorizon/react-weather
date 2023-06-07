'use client'

import { useEffect, useRef } from 'react'
import HomeModernIcon from '@heroicons/react/24/outline/HomeModernIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import MoonIcon from '@heroicons/react/24/outline/MoonIcon'
import { twJoin } from 'tailwind-merge'

import NavigationMenuItem from './NavigationMenuItem'
import { useVerticalScrollProgress } from '@hooks/useVerticalScrollProgress'
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
  const rootRef = useRef<HTMLMenuElement>(null)
  const { isScrollOnTop } = useVerticalScrollProgress({
    positions: ['top']
  })

  useEffect(() => {
    if (!rootRef.current) return

    if (isScrollOnTop) {
      rootRef.current.classList.remove('shadow-md')
    }

    if (!isScrollOnTop) {
      rootRef.current.classList.add('shadow-md')
    }
  }, [isScrollOnTop])

  return (
    <menu
      ref={rootRef}
      className={twJoin([
        'fixed',
        'left-0',
        'top-0',
        'z-[1000]',
        'flex',
        'h-nav-menu-h',
        'w-screen',
        'items-center',
        'justify-center',
        'bg-white',
        'dark:bg-slate-800',
        '[550px-max]:h-nav-menu-sm-h'
      ])}
    >
      <nav className='h-full w-[500px] px-[24px]'>
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
