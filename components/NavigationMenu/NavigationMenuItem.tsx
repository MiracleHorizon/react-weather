import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twJoin } from 'tailwind-merge'

import type { NavigationCategory } from '@models/NavigationCategory'

function NavigationMenuItem({ title, href, icon }: NavigationCategory) {
  const pathname = usePathname()
  const isSelected = pathname === href

  return (
    <li className='h-full'>
      <Link
        href={href}
        className={twJoin(
          'flex h-full items-center justify-center',
          isSelected
            ? 'text-gray-600 dark:text-gray-200'
            : 'text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300'
        )}
      >
        <span className='mr-[6px]'>{icon}</span>
        <span className='text-[17px] [550px-max]:hidden'>{title}</span>
      </Link>
    </li>
  )
}

export default NavigationMenuItem
