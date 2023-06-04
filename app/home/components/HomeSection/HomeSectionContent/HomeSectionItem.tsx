import { memo } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

import type { SectionItem } from '../HomeSection.types'

function HomeSectionItem({
  title,
  value,
  postfix,
  iconClassName
}: SectionItem) {
  return (
    <li
      key={title}
      className={twJoin([
        'border-solid',
        'border-gray-200',
        'py-[3px]',
        'dark:border-gray-400',
        '[&:not(&:last-of-type)]:mb-[0px]',
        '[&:not(&:last-of-type)]:border-b-[1px]'
      ])}
    >
      <article className='flex justify-between text-[16px] [550px-max]:text-[15px]'>
        <span className='text-gray-500 dark:text-gray-200'>{title}</span>
        <span className='text-gray-600 dark:text-gray-200'>
          {value}
          {postfix}
          {iconClassName && (
            <i className={twMerge('wi ml-[8px] text-[20px]', iconClassName)} />
          )}
        </span>
      </article>
    </li>
  )
}

export default memo(HomeSectionItem)
