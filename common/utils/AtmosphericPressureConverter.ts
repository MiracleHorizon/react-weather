export class AtmosphericPressureConverter {
  private static CONVERT_MULTIPLIER: number = 1.333

  public static convertHectopascalsToMmHg(value: number): number {
    return Math.round(value / this.CONVERT_MULTIPLIER)
  }

  public static convertMmHgToHectopascals(value: number): number {
    return Math.round(value * this.CONVERT_MULTIPLIER)
  }
}
