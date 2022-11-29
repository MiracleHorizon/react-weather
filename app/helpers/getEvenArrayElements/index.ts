export function getEvenArrayElements<T>(array: T[]): T[] {
  return array.length >= 5 ? array.filter((_, i) => (i + 1) % 2 === 0) : array
}
