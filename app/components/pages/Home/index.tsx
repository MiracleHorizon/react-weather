import CurrentWeatherStore from 'stores/CurrentWeatherStore'
import { DefaultLayout } from 'layouts/Default'
import { LocationBar } from './LocationBar'
import { TemperatureBar } from './TemperatureBar'

export const Home = () => {
  const { location, iconClassName, temperature } = CurrentWeatherStore.weather

  return (
    <DefaultLayout title='Home'>
      <main className='w-screen'>
        <section className='py-[14px]'>
          <TemperatureBar
            temperature={temperature}
            iconClassName={iconClassName}
          />
          <LocationBar {...location} />
        </section>
      </main>
    </DefaultLayout>
  )
}
