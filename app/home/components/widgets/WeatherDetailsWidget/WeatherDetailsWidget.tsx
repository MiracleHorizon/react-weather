import { useMemo } from 'react'

import WeatherDetailsItem from './WeatherDetailsItem'
import { getUnitSystemCookie } from '@lib/cookies/getUnitSystemCookie'
import { UnitSystemPostfixesHandler } from '@utils/UnitSystemPostfixesHandler'
import { AtmosphericPressureConverter } from '@utils/AtmosphericPressureConverter'
import { convertWindDirectionDegreesToCardinal } from '@helpers/convertWindDirectionDegreesToCardinal'
import type { Temperature } from '@entities/Temperature'
import type { Wind } from '@models/weather'

export default function WeatherDetailsWidget({
  pressure,
  humidity,
  wind
}: Props) {
  const { unitSystemCookie: unitSystem } = getUnitSystemCookie()
  const unitSystemPostfixesHandler = useMemo(() => {
    return new UnitSystemPostfixesHandler(unitSystem)
  }, [unitSystem])
  const windSpeedPostfix = unitSystemPostfixesHandler.getSpeedPostfix()

  const items = useMemo(() => {
    return [
      {
        title: 'Humidity',
        value: humidity,
        postfix: '%',
        iconClassName: 'humidity'
      },
      {
        title: 'Pressure',
        value: AtmosphericPressureConverter.convertHectopascalsToMmHg(pressure),
        postfix: ' mmHg',
        iconClassName: 'barometer transform translate-y-[1px]'
      },
      {
        title: 'Wind',
        value: wind.speed.toFixed(1).replace('.0', ''),
        postfix: ` ${windSpeedPostfix}, ${convertWindDirectionDegreesToCardinal(
          wind.deg
        )}`,
        iconClassName: 'dust transform translate-y-[2px]'
      }
    ]
  }, [pressure, humidity, wind.speed, wind.deg, windSpeedPostfix])

  return (
    <section className='mt-[8px] w-full'>
      <ul className='flex w-full flex-col items-center [440px-max]:px-[10px]'>
        {items.map(item => (
          <WeatherDetailsItem key={item.title} {...item} />
        ))}
      </ul>
    </section>
  )
}

interface Props {
  wind: Wind
  humidity: number
  pressure: number
  temperature: Temperature
}
