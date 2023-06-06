'use client'

import { useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'

import WeeklyForecast from './WeeklyForecast'
import { SelectedDailyForecastSkeleton } from './SelectedDailyForecast'
import { useForecastStore } from '@stores/forecastStore'
import type { WeatherForecastResponse } from '@models/weather'

const SelectedDailyForecast = dynamic(() => import('./SelectedDailyForecast'), {
  ssr: false,
  loading: () => <SelectedDailyForecastSkeleton />
})

export default function ForecastContent({ weatherForecastResponse }: Props) {
  const handleInitializeForecast = useCallback(() => {
    useForecastStore.initialize(weatherForecastResponse)
  }, [weatherForecastResponse])

  useEffect(() => handleInitializeForecast(), [handleInitializeForecast])

  return (
    <div className='flex w-full flex-col'>
      <SelectedDailyForecast />
      <WeeklyForecast />
    </div>
  )
}

interface Props {
  weatherForecastResponse: WeatherForecastResponse
}
