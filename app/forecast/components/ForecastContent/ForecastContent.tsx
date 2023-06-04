'use client'

import { useCallback, useEffect } from 'react'

import WeeklyForecast from './WeeklyForecast'
import { useForecastStore } from '@stores/forecastStore'
import type { WeatherForecastResponse } from '@models/weather'

export default function ForecastContent({ weatherForecastResponse }: Props) {
  const handleInitializeForecast = useCallback(() => {
    useForecastStore.initialize(weatherForecastResponse)
  }, [weatherForecastResponse])

  useEffect(() => handleInitializeForecast(), [handleInitializeForecast])

  return (
    <div className='flex w-full flex-col'>
      <WeeklyForecast />
    </div>
  )
}

interface Props {
  weatherForecastResponse: WeatherForecastResponse
}
