import { NextPage } from 'next'

import CurrentWeatherStore from 'stores/CurrentWeatherStore'
import { WeatherService } from 'services/WeatherService'
import { ICurrentWeatherReport } from 'models/weather/reports/ICurrentWeatherReport'
import { DefaultLayout } from '../app/layouts/Default'

const HomePage: NextPage<{ weatherResponse: ICurrentWeatherReport }> = ({
  weatherResponse,
}) => {
  CurrentWeatherStore.weather = weatherResponse

  console.log(weatherResponse)
  if (!CurrentWeatherStore.weather) return null

  return (
    <DefaultLayout title='Current Weather'>
      <div></div>
    </DefaultLayout>
  )
}

export default HomePage

export const getStaticProps = async () => {
  const weatherResponse = await WeatherService.fetchCurrentWeather()

  return {
    props: {
      weatherResponse,
    },
  }
}
