const LOCATION_EXCEPTION_MESSAGE: string = 'Location not found'

export class NotFoundLocationException extends Error {
  constructor() {
    super(LOCATION_EXCEPTION_MESSAGE)
    this.message = LOCATION_EXCEPTION_MESSAGE
    this.name = 'NotFoundLocationException'
  }

  public static getMessage(): string {
    return LOCATION_EXCEPTION_MESSAGE
  }
}
