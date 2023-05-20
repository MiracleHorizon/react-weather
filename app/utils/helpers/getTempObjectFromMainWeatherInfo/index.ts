import { IMainWeatherInfo } from 'models/weather/general/IMainWeatherInfo'
import { ITemperature } from 'models/weather/ITemperature'

export const getTempObjectFromMainWeatherInfo = (
  main: IMainWeatherInfo
): ITemperature => {
  const { temp, temp_min, temp_max, feels_like } = main

  return {
    temp: temp,
    min: temp_min,
    max: temp_max,
    feelsLike: feels_like,
  }
}
