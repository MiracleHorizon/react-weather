'use client'

import { type Dispatch, type SetStateAction } from 'react'
import ClockIcon from '@heroicons/react/24/outline/ClockIcon'
import Cookie from 'js-cookie'

import SettingsSection from '../SettingsSection'
import { HOUR_CYCLE_COOKIE_NAME } from '@constants/cookie'
import type { HourCycle } from '@app-types/HourCycle'

const items = ['24 hours', '12 hours']

export default function HourCycleSection({ hourCycle }: Props) {
  function handleChange(
    value: string,
    setHourCycle: Dispatch<SetStateAction<string>>
  ) {
    if (value.startsWith('24')) {
      Cookie.set(HOUR_CYCLE_COOKIE_NAME, 'h24')
      setHourCycle('24 hours')
    }

    if (value.startsWith('12')) {
      Cookie.set(HOUR_CYCLE_COOKIE_NAME, 'h12')
      setHourCycle('12 hours')
    }
  }

  return (
    <SettingsSection
      title='Hour cycle'
      icon={<ClockIcon className='dark:stroke-gray-100' />}
      initialState={hourCycle === 'h12' ? '12 hours' : '24 hours'}
      items={items}
      handleChange={handleChange}
    />
  )
}

interface Props {
  hourCycle: HourCycle
}
