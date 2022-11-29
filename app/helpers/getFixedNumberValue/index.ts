export const getFixedNumberValue = (value: number): string =>
  value.toFixed(1).replace('.0', '').split('.').join(',')
