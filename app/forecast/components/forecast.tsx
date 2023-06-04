import { twJoin } from 'tailwind-merge'

import ForecastContent from './ForecastContent'
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
        'py-[16px]'
      ])}
    >
      <ForecastContent weatherForecastResponse={weatherForecastResponse} />
    </div>
  )
}

interface Props {
  weatherForecastResponse: WeatherForecastResponse
}
