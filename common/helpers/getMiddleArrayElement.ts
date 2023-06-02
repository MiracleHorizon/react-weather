export function getMiddleArrayElement<T>(array: T[]): T | null {
  if (array.length === 0) return null

  if (array.length === 1) {
    return array[0] as T
  }

  return array[Math.floor(array.length / 2)] as T
}
