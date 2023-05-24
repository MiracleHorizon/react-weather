import Divider from '@ui/Divider'
import LocationForm from '@components/LocationForm'
import ThemeToggle from './ThemeToggle'
import { useSelectCity } from '@hooks/useSelectCity'

export default function Settings() {
  const { city } = useSelectCity()

  return (
    <>
      <article className='mb-[12px]'>
        <h1 className='text-center text-[36px] text-gray-700 dark:text-gray-100'>
          Settings
        </h1>
      </article>
      <div className='flex flex-col items-center'>
        <LocationForm defaultValue={city} />
        <Divider />
        <ThemeToggle />
      </div>
    </>
  )
}
