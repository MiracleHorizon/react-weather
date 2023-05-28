import dynamic from 'next/dynamic'
import { Inter, Roboto } from 'next/font/google'

import DividerWithText from '@ui/DividerWithText'

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
  preload: true,
  variable: '--font-roboto'
})

const inter = Inter({
  weight: ['400', '500'],
  subsets: ['latin'],
  style: 'normal',
  preload: true,
  variable: '--font-inter'
})

export default function Landing() {
  return (
    <main className='flex w-[550px] flex-col items-center justify-center rounded-3xl bg-white pb-[8px] shadow-md'>
      <article className='pt-[25px]'>
        <h1
          className={`text-center text-[28px] font-normal tracking-[0.05em] text-gray-600 dark:text-gray-600 ${roboto.className}`}
        >
          Weather App
        </h1>
      </article>
      <section
        className={`mt-[18px] flex w-full flex-col items-center px-[50px] pb-[30px] ${inter.className}`}
      >
        <EnterCity />
        <DividerWithText text='or' />
        <UserGeolocationButton />
      </section>
    </main>
  )
}
