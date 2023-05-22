// TODO: Array length === 0?
export function getMiddleArrayElement<T>(array: T[]): T | null {
  if (array.length === 0) return null
  return array[Math.floor(array.length / 2)] as T
}
