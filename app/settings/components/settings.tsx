import { cookies } from 'next/headers'

import Divider from '@ui/Divider'
import ThemeToggle from '@components/ThemeToggle'
import LocationForm from '@components/LocationForm'
import { ServerCookieExtractor } from '@utils/server/ServerCookieExtractor'

export default function Settings() {
  const serverCookieExtract = new ServerCookieExtractor(cookies())
  const city = serverCookieExtract.extractCity()

  return (
    <>
      <article className='mb-[12px]'>
        <h1 className='text-center text-[36px] text-gray-700 dark:text-gray-100'>
          Settings
        </h1>
      </article>
      <div className='flex flex-col items-center'>
        <LocationForm defaultValue={city ?? ''} />
        <Divider />
        <ThemeToggle />
      </div>
    </>
  )
}
