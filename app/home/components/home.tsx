import { useMemo } from 'react'

import Divider from '@ui/Divider'
import DateWidget from './widgets/DateWidget'
import LocationWidget from './widgets/LocationWidget'
import SunStateWidget from './widgets/SunStateWidget'
import TemperatureWidget from './widgets/TemperatureWidget'
import WeatherDetailsWidget from './widgets/WeatherDetailsWidget'
import { CurrentWeatherReport } from '@entities/weather'
import type { CurrentWeatherResponse } from '@models/weather'

export default function Home({ currentWeatherResponse }: Props) {
  const currentWeatherReport = useMemo(() => {
    return new CurrentWeatherReport(currentWeatherResponse)
  }, [currentWeatherResponse])
  const {
    sunState,
    location,
    temperature,
    iconClassName,
    report: {
      dt: dateTimestamp,
      wind,
      main: { humidity, pressure }
    }
  } = currentWeatherReport

  return (
    <main className='flex w-[550px] items-start justify-start rounded-3xl bg-white px-[40px] pb-[24px] pt-[32px] shadow-md dark:bg-gray-500 [440px-max]:px-[24px] [650px-max]:flex-col [650px-max]:items-center'>
      <div className='mr-[20px] w-[130px] min-w-[130px] [650px-max]:mb-[12px] [650px-max]:mr-0 [650px-max]:w-max [650px-max]:max-w-[80%]'>
        <TemperatureWidget
          mainTemperature={temperature.main}
          weatherIconClassName={iconClassName}
        />
        <LocationWidget {...location} />
        <DateWidget dateTimestamp={dateTimestamp} />
      </div>
      <div className='flex w-full flex-col items-center'>
        <WeatherDetailsWidget
          wind={wind}
          humidity={humidity}
          pressure={pressure}
          temperature={temperature}
        />
        <Divider className='my-[10px] [440px-max]:w-[calc(100%-24px)]' />
        <SunStateWidget {...sunState} />
      </div>
    </main>
  )
}

interface Props {
  currentWeatherResponse: CurrentWeatherResponse
}
