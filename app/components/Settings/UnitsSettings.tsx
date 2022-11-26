import AppStore from 'stores/AppStore'
import { Dropdown } from 'components/ui/Dropdown'
import { WeatherUnitsSystem } from 'models/enums/WeatherUnitsSystem'
import { AtmosphericPressureUnits } from '../../models/enums/AtmosphericPressureUnits'

export const UnitsSettings = () => {
  return (
    <div>
      <div>
        <strong className='text-[16px]'>Units system</strong>
        <Dropdown
          items={Object.values(WeatherUnitsSystem)}
          defaultItem={AppStore.unitsSystem}
          setFunction={AppStore.setUnitsSystem}
          afterClose={true}
        />
      </div>
      <div>
        <strong className='text-[16px]'>Atmospheric pressure units</strong>
        <Dropdown
          items={Object.values(AtmosphericPressureUnits)}
          defaultItem={AppStore.atmosphericPressureUnits}
          setFunction={AppStore.setAtmosphericPressureUnits}
          afterClose={true}
        />
      </div>
    </div>
  )
}
