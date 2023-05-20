import { getDailyForecastsFromForecastsList } from 'utils/helpers/getDailyForecastsFromForecastsList/index'

const dataJson =
  '[{"dt":1669766400,"main":{"temp":-25.08,"feels_like":-31.18,"temp_min":-25.08,"temp_max":-25.08,"pressure":1044,"sea_level":1044,"grnd_level":1037,"humidity":99,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":95},"wind":{"speed":1.8,"deg":144,"gust":2.07},"visibility":1594,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-11-30 00:00:00"},{"dt":1669777200,"main":{"temp":-24.27,"feels_like":-24.27,"temp_min":-24.27,"temp_max":-22.64,"pressure":1044,"sea_level":1044,"grnd_level":1036,"humidity":99,"temp_kf":-1.63},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":97},"wind":{"speed":1,"deg":161,"gust":1.44},"visibility":543,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-11-30 03:00:00"},{"dt":1669788000,"main":{"temp":-22.46,"feels_like":-22.46,"temp_min":-22.46,"temp_max":-21.15,"pressure":1043,"sea_level":1043,"grnd_level":1035,"humidity":99,"temp_kf":-1.31},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":98},"wind":{"speed":0.64,"deg":200,"gust":1.16},"visibility":644,"pop":0.2,"snow":{"3h":0.18},"sys":{"pod":"d"},"dt_txt":"2022-11-30 06:00:00"},{"dt":1669798800,"main":{"temp":-20.45,"feels_like":-20.45,"temp_min":-20.45,"temp_max":-20.45,"pressure":1041,"sea_level":1041,"grnd_level":1034,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":0.98,"deg":273,"gust":1.08},"visibility":669,"pop":0.2,"snow":{"3h":0.18},"sys":{"pod":"d"},"dt_txt":"2022-11-30 09:00:00"},{"dt":1669809600,"main":{"temp":-20.88,"feels_like":-26.04,"temp_min":-20.88,"temp_max":-20.88,"pressure":1040,"sea_level":1040,"grnd_level":1033,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":1.68,"deg":274,"gust":1.62},"visibility":447,"pop":0.25,"snow":{"3h":0.21},"sys":{"pod":"d"},"dt_txt":"2022-11-30 12:00:00"},{"dt":1669820400,"main":{"temp":-20.7,"feels_like":-25.78,"temp_min":-20.7,"temp_max":-20.7,"pressure":1039,"sea_level":1039,"grnd_level":1032,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":1.66,"deg":270,"gust":1.6},"visibility":769,"pop":0.2,"snow":{"3h":0.16},"sys":{"pod":"d"},"dt_txt":"2022-11-30 15:00:00"},{"dt":1669831200,"main":{"temp":-21.17,"feels_like":-25.49,"temp_min":-21.17,"temp_max":-21.17,"pressure":1038,"sea_level":1038,"grnd_level":1031,"humidity":99,"temp_kf":0},"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":{"all":100},"wind":{"speed":1.36,"deg":267,"gust":1.31},"visibility":1138,"pop":0.2,"snow":{"3h":0.12},"sys":{"pod":"d"},"dt_txt":"2022-11-30 18:00:00"},{"dt":1669842000,"main":{"temp":-20.51,"feels_like":-20.51,"temp_min":-20.51,"temp_max":-20.51,"pressure":1038,"sea_level":1038,"grnd_level":1031,"humidity":100,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":1.22,"deg":280,"gust":1.21},"visibility":1386,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-11-30 21:00:00"},{"dt":1669852800,"main":{"temp":-19.67,"feels_like":-19.67,"temp_min":-19.67,"temp_max":-19.67,"pressure":1038,"sea_level":1038,"grnd_level":1031,"humidity":100,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":0.89,"deg":290,"gust":0.93},"visibility":2027,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-12-01 00:00:00"},{"dt":1669863600,"main":{"temp":-21.01,"feels_like":-21.01,"temp_min":-21.01,"temp_max":-21.01,"pressure":1038,"sea_level":1038,"grnd_level":1031,"humidity":100,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":0.45,"deg":257,"gust":0.72},"visibility":1452,"pop":0,"sys":{"pod":"d"},"dt_txt":"2022-12-01 03:00:00"}]'

const data = JSON.parse(dataJson)
const dailyForecasts = getDailyForecastsFromForecastsList(data)

describe(`После получения массива дневных прогнозов погоды 
должны быть получены следующие результаты:`, () => {
  // Первый элемент.
  test('данные о первом дне прогноза погоды:', () => {
    expect(dailyForecasts[0].identifier).toBe(1669766400)
    expect(dailyForecasts[0].data[0].main.feels_like).toBe(-31.18)
    expect(dailyForecasts[0].data[1].wind.deg).toBe(161)
    expect(dailyForecasts[0].data[4].pop).toBe(0.25)
    expect(dailyForecasts[0].data[6].visibility).toBe(1138)
  })

  // Второй элемент.
  test('данные о втором дне прогноза погоды:', () => {
    expect(dailyForecasts[1].identifier).toBe(1669852800)
    expect(dailyForecasts[1].data[0].sys).toEqual({ pod: 'd' })
    expect(dailyForecasts[1].data[0].clouds).toEqual({ all: 100 })
    expect(dailyForecasts[1].data[0].weather[0].description).toBe(
      'overcast clouds'
    )
    expect(dailyForecasts[1].data[1].dt_txt).toBe('2022-12-01 03:00:00')
    expect(dailyForecasts[1].data[1].main.pressure).toBe(1038)
  })
})
