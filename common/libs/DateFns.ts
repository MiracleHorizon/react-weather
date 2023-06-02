import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'

export class DateFns {
  public static formatDate(date: string | number, dateFormat: string): string {
    return format(new Date(date), dateFormat, {
      locale: enUS,
      weekStartsOn: 1
    })
  }
}
