'use client'

import CalculatorIcon from '@heroicons/react/24/outline/CalculatorIcon'

import SettingsSection from 'app/settings/components/SettingsSection'
import { setUnitSystemCookie } from '@lib/cookies/setUnitSystemCookie'
import { UnitSystem } from '@models/UnitSystem'
import type { SetState } from '@app-types/SetState'
import { handleInitialState, items, type UnitSystemOption } from './data'

export default function UnitSystemSection({ unitSystem }: Props) {
  async function handleChange(
    unitSystem: UnitSystemOption,
    setUnitSystem: SetState<UnitSystemOption>
  ) {
    await setUnitSystemCookie(unitSystem.value)
    setUnitSystem(unitSystem)
  }

  return (
    <SettingsSection
      title='Unit system'
      icon={<CalculatorIcon className='dark:stroke-gray-100' />}
      initialState={handleInitialState(unitSystem)}
      items={items}
      handleChange={handleChange}
    />
  )
}

interface Props {
  unitSystem: UnitSystem
}
