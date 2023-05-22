import LocationForm from '@components/LocationForm'
import ThemeToggle from '@components/ThemeToggle'

export default function Settings() {
  return (
    <main className='flex w-full items-center justify-center'>
      <div className='max-w-[600px]'>
        <article className='mb-[12px]'>
          <h1 className='text-center text-[36px] text-gray-700 dark:text-gray-100'>
            Settings
          </h1>
        </article>
        <div className='flex w-[550px] flex-col items-center'>
          <LocationForm />
          <div className='mb-[16px] mt-[14px] h-[1px] w-[calc(550px-28px)] bg-gray-700 dark:bg-gray-100' />
          <ThemeToggle />
        </div>
      </div>
    </main>
  )
}
