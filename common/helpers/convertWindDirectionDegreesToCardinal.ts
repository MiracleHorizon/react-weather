import { WindDirection } from '@models/WindDirection'

export function convertWindDirectionDegreesToCardinal(
  windDirectionDegrees: number
): WindDirection {
  if (windDirectionDegrees >= 0 && windDirectionDegrees < 45) {
    return WindDirection.N
  } else if (windDirectionDegrees >= 45 && windDirectionDegrees < 90) {
    return WindDirection.NE
  } else if (windDirectionDegrees >= 90 && windDirectionDegrees < 135) {
    return WindDirection.E
  } else if (windDirectionDegrees >= 135 && windDirectionDegrees < 180) {
    return WindDirection.SE
  } else if (windDirectionDegrees >= 180 && windDirectionDegrees < 225) {
    return WindDirection.S
  } else if (windDirectionDegrees >= 225 && windDirectionDegrees < 270) {
    return WindDirection.SW
  } else if (windDirectionDegrees >= 270 && windDirectionDegrees < 315) {
    return WindDirection.W
  } else if (windDirectionDegrees >= 315 && windDirectionDegrees < 360) {
    return WindDirection.NW
  } else if (windDirectionDegrees === 360) {
    return WindDirection.N
  } else {
    throw new Error('Unexpected wind direction')
  }
}
