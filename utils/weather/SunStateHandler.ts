import { DateHandler } from '@utils/DateHandler'
import type { SunState } from '@models/SunState'

export class SunStateHandler {
  constructor(private readonly sunState: SunState) {}

  public adaptSunStateToLocationTime(locationTimezoneOffset: number): SunState {
    const sunriseLocationTime = this.getLocationTime(
      this.sunState.sunrise,
      locationTimezoneOffset
    )
    const sunsetLocationTime = this.getLocationTime(
      this.sunState.sunset,
      locationTimezoneOffset
    )

    return {
      sunrise: sunriseLocationTime,
      sunset: sunsetLocationTime
    }
  }

  private getLocationTime(
    dateTimestamp: number,
    locationTimezoneOffset: number
  ): number {
    const dateHandler = new DateHandler(dateTimestamp)
    const sunriseLocationDate = dateHandler.getDateWithLocationTimezone(
      locationTimezoneOffset
    )
    return sunriseLocationDate.getTime()
  }
}
