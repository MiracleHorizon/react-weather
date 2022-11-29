import { getFixedNumberValue } from 'helpers/getFixedNumberValue'

test(`Функция getFixedNumberValue должна вернуть округлённое до одного знака 
после запятой значение; Если после запятой единственный знак 0 - 
он заменяется на пустую строку. Точка в строке заменяется на запятую`, () => {
  expect(getFixedNumberValue(0.0)).toBe('0')
  expect(getFixedNumberValue(39.01)).toBe('39')
  expect(getFixedNumberValue(13.458)).toBe('13,5')
  expect(getFixedNumberValue(43.91)).toBe('43,9')
  expect(getFixedNumberValue(3.208)).toBe('3,2')
})
