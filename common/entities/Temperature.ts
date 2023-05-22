import { formatNumberWithOneDecimal } from '@helpers/formatNumberWithOneDecimal'
import type { TemperatureModel } from '@models/weather'

export class Temperature {
  constructor(private readonly temperature: TemperatureModel) {}

  public get main(): string {
    return formatNumberWithOneDecimal(this.temperature.temp)
  }

  public get minimum(): string {
    return formatNumberWithOneDecimal(this.temperature.min)
  }

  public get maximum(): string {
    return formatNumberWithOneDecimal(this.temperature.max)
  }

  public get feelsLike(): string {
    return formatNumberWithOneDecimal(this.temperature.feelsLike)
  }
}
