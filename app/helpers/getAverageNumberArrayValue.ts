export const getAverageNumberArrayValue = ({ array, rounding }: Params) => {
  const reducedValue = array.reduce((value, acc) => acc + value, 0)
  const averageValue = reducedValue / array.length

  switch (rounding) {
    case 'default':
      return averageValue
    case 'floor':
      return Math.floor(averageValue)
    case 'ceil':
      return Math.ceil(averageValue)
    case 'round':
      return Math.round(averageValue)
  }
}

interface Params {
  array: number[]
  rounding: TRounding
}

type TRounding = 'floor' | 'ceil' | 'round' | 'default'
