import { useMemo } from 'react'
import ArrowLongDownIcon from '@heroicons/react/24/solid/ArrowLongDownIcon'
import ArrowLongUpIcon from '@heroicons/react/24/solid/ArrowLongUpIcon'

import TemperatureDetailsItem from './TemperatureDetailsItem'

export default function TemperatureDetails({
  minTemperature,
  maxTemperature
}: Props) {
  const temperatureDetails = useMemo(() => {
    return [
      {
        value: minTemperature,
        icon: <ArrowLongDownIcon />
      },
      {
        value: maxTemperature,
        icon: <ArrowLongUpIcon />
      }
    ]
  }, [minTemperature, maxTemperature])

  return (
    <article className='flex w-full justify-around'>
      {temperatureDetails.map((item, i) => (
        <TemperatureDetailsItem key={item.value + i.toString()} {...item} />
      ))}
    </article>
  )
}

interface Props {
  minTemperature: number
  maxTemperature: number
}
