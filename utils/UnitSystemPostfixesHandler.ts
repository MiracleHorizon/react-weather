import { UnitSystem } from '@models/UnitSystem'

export class UnitSystemPostfixesHandler {
  constructor(private readonly unitSystem: UnitSystem) {}

  public getSpeedPostfix(): string {
    switch (this.unitSystem) {
      case UnitSystem.DEFAULT:
        return 'm/s'
      case UnitSystem.IMPERIAL:
        return 'ml/h'
      case UnitSystem.METRIC:
        return 'm/s'
    }
  }
}
