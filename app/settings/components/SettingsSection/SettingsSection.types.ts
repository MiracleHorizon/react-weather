import type { ReactNode } from 'react'

import type { SetState } from '@app-types/SetState'

export interface SettingsSectionProps<T extends string> {
  title: string
  icon: ReactNode
  initialState: SettingsElement<T>
  items: SettingsElement<T>[]
  handleChange: (
    element: SettingsElement<T>,
    setElement: SetState<SettingsElement<T>>
  ) => void
  listboxClassName?: string
}

export interface SettingsElement<T extends string> {
  title: string
  value: T
}
