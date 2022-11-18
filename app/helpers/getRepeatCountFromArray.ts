export const getRepeatCountFromArray = ({ array, field }: Params) => {
  const counts = {} as any

  array.forEach(item => (counts[item[field]] = 1 + (counts[item[field]] || 0)))

  return Object.entries(counts).sort(([, count1], [, count2]) => {
    return (count2 as number) - (count1 as number)
  })
}

interface Params {
  array: any[]
  field: string
}
