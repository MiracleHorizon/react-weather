import { Season } from '@models/Season'
import type { IntRange } from '@app-types/IntRange'

export class DateHandler {
  private readonly date: Date

  constructor(dateValue: string | number) {
    this.date = new Date(dateValue)
  }

  public getSeason(): Season {
    const month = (this.date.getMonth() + 1) as IntRange<1, 12> // 0 - 11 => 1 - 12

    if (month > 2 && month < 6) {
      return Season.SPRING
    }

    if (month > 5 && month < 9) {
      return Season.SUMMER
    }

    if (month > 8 && month < 12) {
      return Season.AUTUMN
    }

    return Season.WINTER
  }

  public getWeekday(): string {
    return Intl.DateTimeFormat('en-EN', {
      weekday: 'long'
    }).format(this.date)
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
