import dynamic from 'next/dynamic'
import { Inter, Roboto } from 'next/font/google'
import { twJoin } from 'tailwind-merge'

import DividerWithText from '@ui/DividerWithText'

// TODO: Loaders
const EnterCity = dynamic(() => import('@components/EnterCity'), {
  loading: () => <>LOADING SKELETON</>
})
const UserGeolocationButton = dynamic(() => import('./UserGeolocationButton'), {
  loading: () => <>LOADING SKELETON</>
})

const roboto = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  style: 'normal',
  preload: true
})

const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin'],
  style: 'normal',
  preload: true
})

export default function Landing() {
  return (
    <div
      className={twJoin([
        'w-full',
        'flex',
        'flex-col',
        'items-center',
        'justify-center',
        'rounded-3xl',
        'pb-[8px]'
      ])}
    >
      <article className='pt-[25px]'>
        <h1
          className={twJoin([
            'text-center',
            'text-[28px]',
            'font-normal',
            'tracking-[0.05em]',
            'text-gray-600',
            'dark:text-gray-600',
            roboto.className
          ])}
        >
          Weather App
        </h1>
      </article>
      <section
        className={twJoin([
          'mt-[18px]',
          'flex',
          'w-full',
          'flex-col',
          'items-center',
          'px-[50px]',
          inter.className
        ])}
      >
        <EnterCity />
        <DividerWithText text='or' />
        <UserGeolocationButton />
      </section>
    </div>
  )
}
