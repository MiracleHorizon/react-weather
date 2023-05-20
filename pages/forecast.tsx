import { NextPage } from 'next'

import ForecastStore from 'stores/ForecastStore'
import { Forecast } from 'components/pages/Forecast'
import { WeatherService } from 'services/WeatherService'
import { IFiveDayForecastResponse } from 'models/api/IFiveDayForecastResponse'

const ForecastPage: NextPage<Props> = ({ forecastResponse }) => {
  ForecastStore.forecast = forecastResponse

  return <Forecast />
}

export default ForecastPage

export const getStaticProps = async () => {
  const forecastResponse = await WeatherService.fetchFiveDayForecast()

  if (!forecastResponse) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      forecastResponse
    }
  }
}

interface Props {
  forecastResponse: IFiveDayForecastResponse
}
