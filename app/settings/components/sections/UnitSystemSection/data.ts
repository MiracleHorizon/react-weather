import { UnitSystem } from '@models/UnitSystem'
import type { SettingsElement } from '../../SettingsSection/SettingsSection.types'

export type UnitSystemOption = SettingsElement<UnitSystem>

export const defaultItem: UnitSystemOption = {
  title: 'Default',
  value: UnitSystem.DEFAULT
}
export const imperialItem: UnitSystemOption = {
  title: 'Imperial',
  value: UnitSystem.IMPERIAL
}
export const metricItem: UnitSystemOption = {
  title: 'Metric',
  value: UnitSystem.METRIC
}
export const items: UnitSystemOption[] = [defaultItem, imperialItem, metricItem]

export function handleInitialState(unitSystem: UnitSystem) {
  switch (unitSystem) {
    case UnitSystem.DEFAULT:
      return defaultItem
    case UnitSystem.IMPERIAL:
      return imperialItem
    case UnitSystem.METRIC:
      return metricItem
  }
}
