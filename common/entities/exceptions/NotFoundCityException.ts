const CITY_EXCEPTION_MESSAGE: string = 'Location not found'

export class NotFoundCityException extends Error {
  constructor() {
    super(CITY_EXCEPTION_MESSAGE)
    this.message = CITY_EXCEPTION_MESSAGE
    this.name = 'NotFoundCityException'
  }

  public static getMessage(): string {
    return CITY_EXCEPTION_MESSAGE
  }
}
