import { DateHandler } from '@utils/DateHandler'
import type { SunState } from '@models/SunState'
import type { DayDuration } from '@models/DayDuration'

export class SunStateHandler {
  constructor(private readonly sunState: SunState) {}

  public getDayDuration(locationTimezoneOffset: number): DayDuration {
    const { sunrise, sunset } = this.adaptSunStateToLocationTime(
      locationTimezoneOffset
    )
    const dayDuration = (sunset - sunrise) / (1000 * 3600)
    const hours = Math.trunc(dayDuration)
    const minutes = Math.floor(60 * (dayDuration - hours))

    return {
      hours,
      minutes
    }
  }

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
