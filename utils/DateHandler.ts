export class DateHandler {
  private readonly date: Date

  constructor(dateValue: string | number) {
    this.date = new Date(dateValue)
  }

  public getDateWithLocationTimezone(locationTimezoneOffset: number): Date {
    const date = new Date(this.date.toUTCString())
    const hours = date.getHours()
    // NOTE: Date.getTimezoneOffset возвращает timezone offset в формате минут
    const clientTimezoneOffset = this.date.getTimezoneOffset() / 60

    date.setHours(hours + locationTimezoneOffset + clientTimezoneOffset)

    return date
  }
}
