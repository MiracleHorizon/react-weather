export class DateFns {
  public static async importFormatAndLocale() {
    try {
      return {
        format: await import('date-fns/format').then(module => module.default),
        locale: await import('date-fns/locale/en-US').then(
          module => module.default
        )
      }
    } catch (err) {
      console.log(err)
      throw err
    }
  }
}
