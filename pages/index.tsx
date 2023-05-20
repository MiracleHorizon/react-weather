import { NextPage } from 'next'

import CurrentWeatherStore from 'stores/CurrentWeatherStore'
import { Home } from 'components/pages/Home'
import { WeatherService } from 'services/WeatherService'
import { ICurrentWeatherReport } from 'models/weather/reports/ICurrentWeatherReport'

const HomePage: NextPage<Props> = ({ currentWeatherResponse }) => {
  CurrentWeatherStore.setWeather(currentWeatherResponse)

  return <Home />
}

export default HomePage

export const getStaticProps = async () => {
  const currentWeatherResponse = await WeatherService.fetchCurrentWeather()

  return {
    props: {
      currentWeatherResponse
    }
  }
}

interface Props {
  currentWeatherResponse: ICurrentWeatherReport
}
