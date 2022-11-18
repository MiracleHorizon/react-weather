import { NextPage } from 'next'

import { WeatherService } from '../app/services/WeatherService'
import { IFiveDayForecastResponse } from 'models/api/responses/IFiveDayForecastResponse'

const HomePage: NextPage<{ forecast: IFiveDayForecastResponse }> = ({
  forecast,
}) => {
  return <div className='w-screen min-h-screen'></div>
}

export default HomePage

export const getStaticProps = async () => {
  const forecast = await WeatherService.fetchFiveDayForecast()

  return {
    props: {
      forecast,
    },
  }
}
