import { NextPage } from 'next'

import ForecastStore from 'stores/ForecastStore'
import { WeatherForecast } from 'components/Forecast'
import { WeatherService } from 'services/WeatherService'
import { IFiveDayForecastResponse } from 'models/api/responses/IFiveDayForecastResponse'

const ForecastPage: NextPage<{
  forecastResponse: IFiveDayForecastResponse
}> = ({ forecastResponse }) => {
  ForecastStore.forecast = forecastResponse

  return <WeatherForecast />
}

export default ForecastPage

export const getStaticProps = async () => {
  const forecastResponse = await WeatherService.fetchFiveDayForecast()

  return {
    props: {
      forecastResponse,
    },
  }
}
