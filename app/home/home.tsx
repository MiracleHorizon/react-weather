import { useMemo } from 'react'

import WeatherHeader from '@components/WeatherHeader'
import WeatherCondition from '@components/WeatherCondition'
import SunStateSection from '@components/InfoSection/sections/SunStateSection'
import WeatherDetailsSection from '@components/InfoSection/sections/WeatherDetailsSection'
import { CurrentWeatherReport } from '@entities/weather'
import { getUnitSystemCookie } from '@lib/cookies/getUnitSystemCookie'
import type { CurrentWeatherResponse } from '@models/weather'

export default function Home({ currentWeatherResponse }: Props) {
  const { unitSystemCookie: unitSystem } = getUnitSystemCookie()
  const {
    report,
    sunState,
    description,
    location,
    dayDuration,
    temperature,
    iconClassName,
    dateTimestamp
  } = useMemo(() => {
    return new CurrentWeatherReport(currentWeatherResponse)
  }, [currentWeatherResponse])

  return (
    <div className='h-full w-full px-[24px] py-[16px]'>
      <WeatherHeader
        location={location}
        timezone={report.timezone}
        dateTimestamp={dateTimestamp}
      />
      <WeatherCondition
        weatherDescription={description}
        unitSystem={unitSystem}
        iconClassName={iconClassName}
        temperature={temperature}
        className='mt-[20px]'
      />
      <WeatherDetailsSection
        baseReport={report}
        wind={report.wind}
        clouds={report.clouds}
        unitSystem={unitSystem}
      />
      <SunStateSection dayDuration={dayDuration} {...sunState} />
    </div>
  )
}

interface Props {
  currentWeatherResponse: CurrentWeatherResponse
}
