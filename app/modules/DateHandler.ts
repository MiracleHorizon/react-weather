export class DateHandler {
  private _date: Date = new Date()

  constructor(dateString: string) {
    this._date = new Date(dateString)
  }

  public getTimesOfDay(): string {
    const timesOfDay = this._date.getDate()
    const postfix = timesOfDay >= 0 && timesOfDay <= 12 ? 'AM' : 'PM'

    return timesOfDay + postfix
  }

  public getDayOfTheWeek(): string {
    const weekDayNumber = this._date.getDay()

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
