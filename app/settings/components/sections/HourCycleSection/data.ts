import type { HourCycle } from '@app-types/HourCycle'
import type { SettingsElement } from '../../SettingsSection/SettingsSection.types'

export type HourCycleOption = SettingsElement<HourCycle>

export const h12Item: HourCycleOption = {
  title: '12 hours',
  value: 'h12'
}
export const h24Item: HourCycleOption = {
  title: '24 hours',
  value: 'h24'
}
export const items: SettingsElement<HourCycle>[] = [h12Item, h24Item]
