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
    <div className='flex w-full items-start justify-start px-[24px] pt-[24px] [440px-max]:px-[18px] [550px-max]:pb-[18px] [650px-max]:flex-col [650px-max]:items-center'>
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
    </div>
  )
}

interface Props {
  currentWeatherResponse: CurrentWeatherResponse
}
