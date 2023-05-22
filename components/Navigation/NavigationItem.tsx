'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

import type { NavigationCategory } from '@models/NavigationCategory'

export default function NavigationItem({ title, href }: NavigationCategory) {
  const pathname = usePathname()
  const isSelected = pathname === href

  return (
    <li className='[&:not(&:last-of-type)]: mr-[12px]'>
      <Link
        href={href}
        className={classNames(
          isSelected
            ? 'text-gray-700 dark:text-gray-100 '
            : 'text-gray-500 dark:text-gray-400'
        )}
      >
        {title}
      </Link>
    </li>
  )
}
