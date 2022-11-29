import { getWindDirection } from 'helpers/getWindDirection'

describe('Функция getWindDirection должна вернуть:', () => {
  test('корректное направление ветра', () => {
    expect(getWindDirection(0)).toBe('N')
    expect(getWindDirection(12)).toBe('N')
    expect(getWindDirection(47)).toBe('NE')
    expect(getWindDirection(234)).toBe('SW')
    expect(getWindDirection(270)).toBe('W')
    expect(getWindDirection(341)).toBe('NW')
    expect(getWindDirection(359)).toBe('NW')
    expect(getWindDirection(360)).toBe('N')
  })

  test(`null, так как принимаемое значение градусов направления ветра 
  выходит за установленные рамки`, () => {
    expect(getWindDirection(-1)).toBeNull()
    expect(getWindDirection(361)).toBeNull()
  })
})
