'use client'

import Cookie from 'js-cookie'
import ClockIcon from '@heroicons/react/24/outline/ClockIcon'

import SettingsSection from 'app/settings/components/SettingsSection'
import { HOUR_CYCLE_COOKIE_NAME } from '@constants/cookie'
import type { HourCycle } from '@app-types/HourCycle'
import type { SetState } from '@app-types/SetState'
import { h12Item, h24Item, type HourCycleOption, items } from './data'

export default function HourCycleSection({ hourCycle }: Props) {
  function handleChange(
    element: HourCycleOption,
    setHourCycle: SetState<HourCycleOption>
  ) {
    if (element.value === 'h24') {
      Cookie.set(HOUR_CYCLE_COOKIE_NAME, 'h24')
      setHourCycle(h24Item)
    }

    if (element.value === 'h12') {
      Cookie.set(HOUR_CYCLE_COOKIE_NAME, 'h12')
      setHourCycle(h12Item)
    }
  }

  return (
    <SettingsSection
      title='Hour cycle'
      icon={<ClockIcon className='dark:stroke-gray-100' />}
      initialState={hourCycle === 'h12' ? h12Item : h24Item}
      items={items}
      handleChange={handleChange}
    />
  )
}

interface Props {
  hourCycle: HourCycle
}
