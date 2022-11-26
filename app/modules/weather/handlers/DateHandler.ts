export class DateHandler {
  private _date: Date = new Date()

  constructor(dateValue: string | number) {
    this._date = new Date(dateValue)
  }

  public getTimesOfDay(): string {
    const timesOfDay = this._date.getDate()
    const postfix = timesOfDay >= 0 && timesOfDay <= 12 ? 'AM' : 'PM'

    return timesOfDay + postfix
  }

  public getTimesOfYear(): string {
    const monthNumber = this._date.getMonth() + 1

    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 3) {
      return 'Winter'
    }

    if (monthNumber === 4 || monthNumber === 5 || monthNumber === 6) {
      return 'Spring'
    }

    if (monthNumber === 7 || monthNumber === 8 || monthNumber === 9) {
      return 'Summer'
    }

    if (monthNumber === 10 || monthNumber === 11 || monthNumber === 12) {
      return 'Autumn'
    }

    throw new Error('') // todo доработать
  }

  public getIsTheSunRose(sunriseTimestamp: number): boolean {
    return this._date.getTime() >= sunriseTimestamp
  }

  public getDayOfTheWeek(withTimeExpressions: boolean = false): string {
    const currentDate = new Date()
    const weekDayNumber = this._date.getDay()

    if (withTimeExpressions && currentDate.getDay() === weekDayNumber) {
      return 'Today'
    }

    switch (weekDayNumber) {
      case 1:
        return 'Monday'
      case 2:
        return 'Tuesday'
      case 3:
        return 'Wednesday'
      case 4:
        return 'Thursday'
      case 5:
        return 'Friday'
      case 6:
        return 'Saturday'
      case 0:
        return 'Sunday'
      default:
        return '' //TODO Доработать
    }
  }
}
