export class ResponseStatusesHandler {
  private static readonly BAD_REQUEST_STATUS: number = 400
  private static readonly UNAUTHORIZED_STATUS: number = 401
  private static readonly NOT_FOUND_STATUS: number = 404

  public static isBadRequestStatus(responseStatus: number): boolean {
    return responseStatus === this.BAD_REQUEST_STATUS
  }

  public static isUnauthorizedStatus(responseStatus: number): boolean {
    return responseStatus === this.UNAUTHORIZED_STATUS
  }

  public static isNotFoundStatus(responseStatus: number): boolean {
    return responseStatus === this.NOT_FOUND_STATUS
  }
}
