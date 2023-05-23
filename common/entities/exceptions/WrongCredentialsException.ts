const EXCEPTION_MESSAGE: string = 'Wrong credentials'

export class WrongCredentialsException extends Error {
  constructor() {
    super(EXCEPTION_MESSAGE)
    this.message = EXCEPTION_MESSAGE
    this.name = 'WrongCredentialsException'
  }

  public static getMessage(): string {
    return EXCEPTION_MESSAGE
  }
}
