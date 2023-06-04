import { twJoin, twMerge } from 'tailwind-merge'

import TemperatureWidget from '@components/widgets/TemperatureWidget'
import { StringTransformer } from '@utils/StringTransformer'
import type { TemperatureModel, WeatherDescription } from '@models/weather'
import type { UnitSystem } from '@models/UnitSystem'

export default function WeatherCondition({
  weatherDescription,
  iconClassName,
  temperature,
  unitSystem,
  className
}: Props) {
  return (
    <section
      className={twMerge(
        'flex w-full flex-col items-center rounded-2xl bg-gray-100 p-[8px]',
        className
      )}
    >
      <div className='flex w-[200px] flex-col items-center [550px-max]:w-[175px]'>
        <TemperatureWidget
          unitSystem={unitSystem}
          temperature={temperature}
          iconClassName={iconClassName}
        />
      </div>
      <h2
        className={twJoin([
          'mt-[10px]',
          'text-[24px]',
          'text-gray-600',
          'dark:text-gray-200',
          '[440px-max]:text-[18px]',
          '[550px-441px]:text-[20px]'
        ])}
      >
        {StringTransformer.capitalizeFirstWord(weatherDescription)}
      </h2>
    </section>
  )
}

interface Props {
  weatherDescription: WeatherDescription
  temperature: TemperatureModel
  iconClassName: string
  unitSystem: UnitSystem
  className?: string
}
