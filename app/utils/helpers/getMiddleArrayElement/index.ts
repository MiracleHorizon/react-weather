export function getMiddleArrayElement<T>(array: T[]): T {
  return array[Math.floor(array.length / 2)]
}
