const EXCEPTION_MESSAGE: string = 'City cookie not found'

export class NoCityCookieException extends Error {
  constructor() {
    super(EXCEPTION_MESSAGE)
    this.message = EXCEPTION_MESSAGE
    this.name = 'NoCityCookieException'
  }

  public static getMessage(): string {
    return EXCEPTION_MESSAGE
  }
}
