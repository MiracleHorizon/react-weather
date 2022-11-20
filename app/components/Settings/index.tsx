import { observer } from 'mobx-react-lite'
import { ChangeEvent } from 'react'

import AppStore from 'stores/AppStore'
import { WeatherUnitsSystem } from 'models/WeatherUnitsSystem'
import { AtmosphericPressureUnits } from 'models/AtmosphericPressureUnits'

export const Settings = observer(() => {
  const handleChangeUnitsSystem = (e: ChangeEvent<HTMLSelectElement>) => {
    AppStore.unitsSystem = e.target.value as WeatherUnitsSystem
  }

  const handleChangeAtmosphericPressureUnits = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    AppStore.atmosphericPressureUnits = e.target
      .value as AtmosphericPressureUnits
  }

  return (
    <div className='w-full flex flex-col items-start px-[40px] justify-center text-[18px]'>
      <div className='flex'>
        <span className='text-white'>
          Units system: <strong>{AppStore.unitsSystem.toLowerCase()}</strong>
        </span>
        <div className='ml-[12px]'>
          <select
            defaultValue={AppStore.unitsSystem}
            onChange={handleChangeUnitsSystem}
          >
            {Object.values(WeatherUnitsSystem).map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <span className='text-white'>
          Atmospheric pressure units:{' '}
          <strong>{AppStore.atmosphericPressureUnits.toLowerCase()}</strong>
        </span>
        <div className='ml-[12px]'>
          <select
            defaultValue={AppStore.atmosphericPressureUnits}
            onChange={handleChangeAtmosphericPressureUnits}
          >
            {Object.values(AtmosphericPressureUnits).map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
})
