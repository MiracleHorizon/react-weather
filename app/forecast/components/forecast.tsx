import { twJoin } from 'tailwind-merge'

import type { WeatherForecastResponse } from '@models/weather'

export default function Forecast({ weatherForecastResponse }: Props) {
  return (
    <div
      className={twJoin([
        'flex',
        'w-full',
        'flex-col',
        'items-start',
        'justify-center',
        'px-[24px]',
        'pt-[24px]'
      ])}
    >
      {weatherForecastResponse.city.name}
    </div>
  )
}

interface Props {
  weatherForecastResponse: WeatherForecastResponse
}
