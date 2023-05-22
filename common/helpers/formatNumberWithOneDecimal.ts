export function formatNumberWithOneDecimal(number: number): string {
  return number.toFixed(1).replace('.0', '').split('.').join(',')
}
