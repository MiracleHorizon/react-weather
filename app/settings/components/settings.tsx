import ThemeToggle from './ThemeToggle'
import { getThemeCookie } from '@lib/cookies/getThemeCookie'

export default function Settings() {
  const { withDarkMode } = getThemeCookie()

  return (
    <main className='flex w-[600px] flex-col items-start justify-start rounded-3xl bg-white px-[40px] py-[24px] shadow-md dark:bg-gray-600'>
      <article className='mb-[12px] w-full'>
        <h1 className='text-center text-[36px] text-gray-700 dark:text-gray-100'>
          Settings
        </h1>
      </article>
      <div className='flex w-full flex-col items-center'>
        <ThemeToggle withDarkMode={withDarkMode} />
      </div>
    </main>
  )
}
