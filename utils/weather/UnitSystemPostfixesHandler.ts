import { UnitSystem } from '@models/UnitSystem'

export class UnitSystemPostfixesHandler {
  constructor(private readonly unitSystem: UnitSystem) {}

  public getSpeedPostfix(): string {
    switch (this.unitSystem) {
      case UnitSystem.DEFAULT:
        return 'm/s' // Meters per second
      case UnitSystem.IMPERIAL:
        return 'ml/h' // Miles per hour
      case UnitSystem.METRIC:
        return 'm/s' // Meters per second
    }
  }

  public getTemperaturePostfix(): string {
    switch (this.unitSystem) {
      case UnitSystem.DEFAULT:
        return 'K' // Kelvin
      case UnitSystem.IMPERIAL:
        return 'F' // Fahrenheit
      case UnitSystem.METRIC:
        return 'C' // Celsius
    }
  }
}
