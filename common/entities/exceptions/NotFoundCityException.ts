const EXCEPTION_MESSAGE: string = 'City not found'

export class NotFoundCityException extends Error {
  constructor() {
    super(EXCEPTION_MESSAGE)
    this.message = EXCEPTION_MESSAGE
    this.name = 'NotFoundCityException'
  }

  public static getMessage(): string {
    return EXCEPTION_MESSAGE
  }
}
