import { twJoin } from 'tailwind-merge'

import type { Props } from './InfoSection.types'

export default function InfoSectionHeader({ title }: Pick<Props, 'title'>) {
  return (
    <header className='[550px-max]:text-center'>
      <article>
        <h3
          className={twJoin([
            'text-[17px]',
            'uppercase',
            'text-gray-600',
            'dark:text-gray-200',
            '[550px-max]:text-[16px]'
          ])}
        >
          {title}
        </h3>
      </article>
    </header>
  )
}
