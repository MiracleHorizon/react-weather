import { capitalizeString } from 'helpers/capitalizeString'

describe('Функция capitalizeString должна вернуть:', () => {
  test('одно слово в формате "capitalize"', () => {
    expect(capitalizeString('heLLO')).toEqual('Hello')
    expect(capitalizeString('lOREM_IPSUM:DOLOr')).toEqual('Lorem_ipsum:dolor')
  })

  test('несколько слов в формате "capitalize"', () => {
    expect(capitalizeString('heLLO, wOrlD!')).toEqual('Hello, World!')
    expect(
      capitalizeString('Hello, my name is Denis and i`m 21 years old')
    ).toEqual('Hello, My Name Is Denis And I`m 21 Years Old')
  })
})
