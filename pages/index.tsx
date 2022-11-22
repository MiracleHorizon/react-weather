import { NextPage } from 'next'

import { DefaultLayout } from 'layouts/Default'
import { WeatherService } from 'services/WeatherService'
import { ICurrentWeatherResponse } from 'models/api/responses/ICurrentWeatherResponse'

const HomePage: NextPage<{ weatherResponse: ICurrentWeatherResponse }> = ({
  weatherResponse,
}) => {
  return (
    <DefaultLayout title='Current Weather'>
      <div className='px-[24px] bg-gray-50'></div>
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
