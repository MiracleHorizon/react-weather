import { getTempObjectFromMainWeatherInfo } from 'utils/helpers/getTempObjectFromMainWeatherInfo/index'

const MAIN_WEATHER_INFO_1 = {
  temp: 30,
  feels_like: 23,
  temp_min: 23,
  temp_max: 31,
  pressure: 1036,
  sea_level: 1024,
  grnd_level: 1024,
  humidity: 94,
  temp_kf: 0
}

const MAIN_WEATHER_INFO_2 = {
  temp: -13,
  feels_like: -17,
  temp_min: -18,
  temp_max: -10,
  pressure: 1016,
  sea_level: 1004,
  grnd_level: 1004,
  humidity: 61,
  temp_kf: -1.24
}

const MAIN_WEATHER_INFO_3 = {
  temp: 1,
  feels_like: -2,
  temp_min: -4,
  temp_max: 2,
  pressure: 1026,
  sea_level: 1020,
  grnd_level: 1020,
  humidity: 78,
  temp_kf: 0
}

test(`Функция getTempObjectFromMainWeatherInfo должна вернуть 
объект с информацией о температуре, получив на вход объект с основной информацией о погоде`, () => {
  expect(getTempObjectFromMainWeatherInfo(MAIN_WEATHER_INFO_1)).toEqual({
    temp: 30,
    min: 23,
    max: 31,
    feelsLike: 23
  })
  expect(getTempObjectFromMainWeatherInfo(MAIN_WEATHER_INFO_2)).toEqual({
    temp: -13,
    min: -18,
    max: -10,
    feelsLike: -17
  })
  expect(getTempObjectFromMainWeatherInfo(MAIN_WEATHER_INFO_3)).toEqual({
    temp: 1,
    min: -4,
    max: 2,
    feelsLike: -2
  })
})
