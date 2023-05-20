import { getMiddleArrayElement } from 'utils/helpers/getMiddleArrayElement/index'

describe('Функция getMiddleArrayElement должна вернуть:', () => {
  test('корректный средний элемент массива', () => {
    expect(getMiddleArrayElement([1])).toBe(1)
    expect(getMiddleArrayElement([3, 4, 5, 6])).toBe(5)
  })

  test('второй элемент массива', () => {
    expect(getMiddleArrayElement([1, 2])).toBe(2)
  })
})
