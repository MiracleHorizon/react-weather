import { FC, useMemo } from 'react'

import { TemperatureBar } from './TemperatureBar'
import { ForecastWeather } from 'modules/forecast/ForecastWeather'
import { WeatherUnitsPostfix } from 'modules/WeatherUnitsPostfix'
import { IForecastSegment } from 'models/weather/forecast/IForecastSegment'
import styles from './SelectedDayPanel.module.css'

export const SelectedDayPanel: FC<{ day: IForecastSegment[] }> = ({ day }) => {
  const weather = useMemo(() => new ForecastWeather(day), [day])

  return (
    <div className='w-full min-h-[280px] flex flex-col py-[16px] bg-blue-500 rounded-b-[30px] mb-[16px]'>
      <TemperatureBar day={day} />
      <main className='flex items-center justify-between mt-auto'>
        <div className={styles.item}>
          <span className='mr-[4px]'>{weather.getAveragePressure()}</span>
          {WeatherUnitsPostfix.getPressureUnitsPostfix()}
        </div>
        <div className={styles.item}>
          <span>{weather.getAverageHumidity()}%</span>
        </div>
        <div className={styles.item}>
          <span>{weather.getAverageProbabilityOfPrecipitation()}%</span>
        </div>
      </main>
    </div>
  )
}
