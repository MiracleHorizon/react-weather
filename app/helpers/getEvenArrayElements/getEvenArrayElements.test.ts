import { getEvenArrayElements } from 'helpers/getEvenArrayElements'

test(`Если длина массива больше или равна 5, 
тогда возвращается массив элементов с чётным индексом, 
в обратном случае изначальный массив`, () => {
  expect(getEvenArrayElements([])).toEqual([])
  expect(getEvenArrayElements([1, 2, 3])).toEqual([1, 2, 3])
  expect(getEvenArrayElements([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  expect(getEvenArrayElements([1, 2, 3, 4, 5])).toEqual([2, 4])
  expect(getEvenArrayElements([1, 2, 3, 4, 5, 6, 7, 8])).toEqual([2, 4, 6, 8])
})
