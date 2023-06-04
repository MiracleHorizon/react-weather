import { useMemo } from 'react'
import { twJoin } from 'tailwind-merge'

import WeatherIconWidget from '@components/widgets/WeatherIconWidget'
import MainTemperature from './MainTemperature'
import TemperatureDetails from './TemperatureDetails'
import { UnitSystemPostfixesHandler } from '@utils/weather/UnitSystemPostfixesHandler'
import type { TemperatureModel } from '@models/weather'
import type { UnitSystem } from '@models/UnitSystem'

export default function TemperatureWidget({
  unitSystem,
  temperature,
  iconClassName
}: Props) {
  const unitSystemPostfixesHandler = useMemo(() => {
    return new UnitSystemPostfixesHandler(unitSystem)
  }, [unitSystem])
  const temperaturePostfix = unitSystemPostfixesHandler.getTemperaturePostfix()

  return (
    <div
      className={twJoin([
        'flex',
        'w-full',
        'flex-col',
        'items-center',
        'justify-center',
        'text-gray-600',
        'dark:text-gray-200'
      ])}
    >
      <div className='mb-[3px] flex items-center justify-center [550px-max]:mb-[6px]'>
        <WeatherIconWidget iconClassName={`${iconClassName} mr-[12px]`} />
        <MainTemperature
          temperature={temperature.temp}
          temperaturePostfix={temperaturePostfix}
        />
      </div>
      <TemperatureDetails
        minTemperature={temperature.temp_min}
        maxTemperature={temperature.temp_max}
      />
    </div>
  )
}

interface Props {
  unitSystem: UnitSystem
  temperature: TemperatureModel
  iconClassName: string
}
