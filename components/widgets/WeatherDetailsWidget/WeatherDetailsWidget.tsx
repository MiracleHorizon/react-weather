import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

import WeatherDetailsItem from './WeatherDetailsItem'
import { getUnitSystemCookie } from '@lib/cookies/unitSystem'
import { UnitSystemPostfixesHandler } from '@utils/weather/UnitSystemPostfixesHandler'
import { AtmosphericPressureConverter } from '@utils/weather/AtmosphericPressureConverter'
import { convertWindDirectionDegreesToCardinal } from '@helpers/convertWindDirectionDegreesToCardinal'
import type { MainWeatherInfo, Wind } from '@models/weather'

export default function WeatherDetailsWidget({
  clouds,
  pressure,
  humidity,
  wind,
  className
}: Props) {
  const { unitSystemCookie: unitSystem } = getUnitSystemCookie()
  const unitSystemPostfixesHandler = useMemo(() => {
    return new UnitSystemPostfixesHandler(unitSystem)
  }, [unitSystem])
  const windSpeedPostfix = unitSystemPostfixesHandler.getSpeedPostfix()

  const items = useMemo(() => {
    return [
      {
        title: 'Cloudy',
        value: clouds,
        postfix: '%',
        iconClassName:
          'wi-cloud wi-fw w-[15px] translate-x-[-1px] transform text-[17px]'
      },
      {
        title: 'Humidity',
        value: humidity,
        postfix: '%',
        iconClassName: 'wi-humidity'
      },
      {
        title: 'Pressure',
        value: AtmosphericPressureConverter.convertHectopascalsToMmHg(pressure),
        postfix: ' mmHg',
        iconClassName: 'wi-barometer transform translate-y-[1px]'
      },
      {
        title: 'Wind',
        value: wind.speed.toFixed(1).replace('.0', ''),
        postfix: ` ${windSpeedPostfix}, ${convertWindDirectionDegreesToCardinal(
          wind.deg
        )}`,
        iconClassName: 'wi-dust transform translate-y-[2px]'
      }
    ]
  }, [clouds, humidity, pressure, wind.speed, wind.deg, windSpeedPostfix])

  return (
    <section className={twMerge('w-full', className)}>
      <ul className='flex w-full flex-col items-center [440px-max]:px-[10px]'>
        {items.map(item => (
          <WeatherDetailsItem key={item.title} {...item} />
        ))}
      </ul>
    </section>
  )
}

interface Props extends Pick<MainWeatherInfo, 'humidity' | 'pressure'> {
  wind: Wind
  clouds: number
  className?: string
}
