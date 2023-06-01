import {
  BAD_REQUEST_STATUS,
  NOT_FOUND_STATUS,
  UNAUTHORIZED_STATUS
} from '@constants/responseStatuses'

export class ResponseStatusesHandler {
  public static isNotFoundStatus(responseStatus: number): boolean {
    return responseStatus === NOT_FOUND_STATUS
  }

  public static isUnauthorizedStatus(responseStatus: number): boolean {
    return responseStatus === UNAUTHORIZED_STATUS
  }

  public static isBadRequestStatus(responseStatus: number): boolean {
    return responseStatus === BAD_REQUEST_STATUS
  }
}
