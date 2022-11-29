import capitalize from 'lodash.capitalize'

export const capitalizeString = (string: string): string => {
  return string
    .split(' ')
    .map(word => capitalize(word))
    .join(' ')
}
