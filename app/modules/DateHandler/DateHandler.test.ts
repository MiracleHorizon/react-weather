import { DateHandler } from 'modules/DateHandler'

const FIRST_TEST_DATE_STRING = '2022-11-28 18:00:00'
const SECOND_TEST_DATE_STRING = '2022-8-30 04:00:00'
const THIRD_TEST_DATE_STRING = '2022-4-03 09:00:00'
const FOURTH_TEST_DATE_STRING = new Date().toLocaleString()
const ERROR_TEST_DATE_STRING = '2022-13-33 24:00:00'

const SUNRISE_DATE_STRING = '2022-10-13 05:00:00'

const firstTestDateHandler = new DateHandler(FIRST_TEST_DATE_STRING)
const secondTestDateHandler = new DateHandler(SECOND_TEST_DATE_STRING)
const thirdTestDateHandler = new DateHandler(THIRD_TEST_DATE_STRING)
const fourthTestDateHandler = new DateHandler(FOURTH_TEST_DATE_STRING)
const errorTestDateHandler = new DateHandler(ERROR_TEST_DATE_STRING)

describe('Обработчики даты должны:', () => {
  // Время года.
  test('вернуть корректное время года', () => {
    expect(firstTestDateHandler.getTimesOfYear()).toBe('Autumn')
    expect(secondTestDateHandler.getTimesOfYear()).toBe('Summer')
    expect(thirdTestDateHandler.getTimesOfYear()).toBe('Spring')
    // Текущее время года. На момент написания теста - осень.
    expect(fourthTestDateHandler.getTimesOfYear()).toBe('Autumn')
  })

  test('пробросить ошибку при получении времени года', () => {
    expect(() => errorTestDateHandler.getTimesOfYear()).toThrowError(
      'Incorrect date value'
    )
  })

  // День недели.
  test('вернуть корректный день недели', () => {
    expect(firstTestDateHandler.getDayOfTheWeek(true)).toEqual('Monday')
    expect(secondTestDateHandler.getDayOfTheWeek()).toEqual('Tuesday')
    expect(thirdTestDateHandler.getDayOfTheWeek()).toEqual('Sunday')
  })

  test('вернуть Today', () => {
    // Текущая день недели. На момент написания теста - понедельник.
    expect(fourthTestDateHandler.getDayOfTheWeek(true)).toEqual('Today')
  })

  test('пробросить ошибку при получение дня недели', () => {
    expect(() => errorTestDateHandler.getDayOfTheWeek()).toThrowError(
      'Incorrect date value'
    )
  })

  // Взошло ли солнце.
  test('вернуть логическое значение того, взошли ли солнце', () => {
    expect(
      firstTestDateHandler.getIsTheSunRose(SUNRISE_DATE_STRING)
    ).toBeTruthy()
    expect(
      secondTestDateHandler.getIsTheSunRose(SUNRISE_DATE_STRING)
    ).toBeFalsy()
    expect(
      thirdTestDateHandler.getIsTheSunRose(SUNRISE_DATE_STRING)
    ).toBeTruthy()
    expect(
      fourthTestDateHandler.getIsTheSunRose(SUNRISE_DATE_STRING)
    ).toBeTruthy() // Текущее время. На момент написания теста - 13:00.
    expect(
      errorTestDateHandler.getIsTheSunRose(SUNRISE_DATE_STRING)
    ).toBeFalsy()
  })
})
