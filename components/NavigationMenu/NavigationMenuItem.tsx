'use client'
import Link from 'next/link'
import Image from 'next/image'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

import type { Routes } from '@router/Routes'

// TODO: Skeleton
export default function NavigationMenuItem({
  href,
  icon,
  imagePath,
  title
}: Props) {
  const pathname = usePathname()

  const className = classNames(
    'w-[50px] h-[50px] flex items-center justify-center [&:not(:first-of-type)]:ml-[16px]',
    pathname === href ? 'opacity-100' : 'opacity-50'
  )

  return (
    <li className={className}>
      <Link
        href={href}
        className='flex h-[100%] flex-col items-center justify-center'
      >
        {imagePath && (
          <Image src={imagePath} width={28} height={28} alt='Menu' />
        )}
        {icon && icon}
        <span className='text-[16px]'>{title}</span>
      </Link>
    </li>
  )
}

type Props = WithImage &
  WithIcon & {
    href: Routes
    title?: string
  }

interface WithImage {
  imagePath: string
  icon?: never
}

interface WithIcon {
  icon: ReactNode
  imagePath?: never
}
