import { Temperature } from 'modules/weather/Temperature'

const temperature1 = new Temperature({
  temp: 23.49,
  max: 25.103,
  min: 17.2391,
  feelsLike: 20.89,
})

const temperature2 = new Temperature({
  temp: -9,
  max: -3,
  min: -13,
  feelsLike: -11.39,
})

const temperature3 = new Temperature({
  temp: 1.43,
  max: 4,
  min: -2,
  feelsLike: 0,
})

describe('Инстансы классов должны вернуть:', () => {
  test('значение температуры', () => {
    expect(temperature1.value).toBe('23,5')
    expect(temperature2.value).toBe('-9')
    expect(temperature3.value).toBe('1,4')
  })

  test('значение максимальной температуры', () => {
    expect(temperature1.maximum).toBe('25,1')
    expect(temperature2.maximum).toBe('-3')
    expect(temperature3.maximum).toBe('4')
  })

  test('значение минимальной температуры', () => {
    expect(temperature1.minimum).toBe('17,2')
    expect(temperature2.minimum).toBe('-13')
    expect(temperature3.minimum).toBe('-2')
  })

  test('значение ощущаемой температуры', () => {
    expect(temperature1.feelsLike).toBe('20,9')
    expect(temperature2.feelsLike).toBe('-11,4')
    expect(temperature3.feelsLike).toBe('0')
  })

  test('массив с объектам дополнительной информации о температуре', () => {
    expect(temperature1.additionalInfoArray).toContainEqual(
      { title: 'Max', value: '25,1' } && { title: 'Feels like', value: '20,9' }
    )
    expect(temperature2.additionalInfoArray).toContainEqual(
      { title: 'Min', value: '-13' } && { title: 'Feels like', value: '-11,4' }
    )
    expect(temperature3.additionalInfoArray).toContainEqual(
      { title: 'Max', value: '4' } && { title: 'Min', value: '-2' }
    )
  })
})
