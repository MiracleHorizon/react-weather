const BAD_REQUEST_MESSAGE: string = 'Nothing to geocode'

export class BadRequestException extends Error {
  constructor() {
    super(BAD_REQUEST_MESSAGE)
    this.message = BAD_REQUEST_MESSAGE
    this.name = 'BadRequestException'
  }

  public static getMessage(): string {
    return BAD_REQUEST_MESSAGE
  }
}
