import { WindDirectionCardinal } from '@models/WindDirectionCardinal'

export function convertWindDirectionDegreesToCardinal(
  windDirectionDegrees: number
): WindDirectionCardinal {
  if (windDirectionDegrees >= 0 && windDirectionDegrees < 45) {
    return WindDirectionCardinal.N
  } else if (windDirectionDegrees >= 45 && windDirectionDegrees < 90) {
    return WindDirectionCardinal.NE
  } else if (windDirectionDegrees >= 90 && windDirectionDegrees < 135) {
    return WindDirectionCardinal.E
  } else if (windDirectionDegrees >= 135 && windDirectionDegrees < 180) {
    return WindDirectionCardinal.SE
  } else if (windDirectionDegrees >= 180 && windDirectionDegrees < 225) {
    return WindDirectionCardinal.S
  } else if (windDirectionDegrees >= 225 && windDirectionDegrees < 270) {
    return WindDirectionCardinal.SW
  } else if (windDirectionDegrees >= 270 && windDirectionDegrees < 315) {
    return WindDirectionCardinal.W
  } else if (windDirectionDegrees >= 315 && windDirectionDegrees < 360) {
    return WindDirectionCardinal.NW
  } else if (windDirectionDegrees === 360) {
    return WindDirectionCardinal.N
  } else {
    throw new Error('Unexpected wind direction')
  }
}
