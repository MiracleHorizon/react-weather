import type { Dispatch, ReactNode, SetStateAction } from 'react'

export interface SettingsSectionProps<T extends string> {
  title: string
  icon: ReactNode
  initialState: T
  items: T[]
  handleChange: (value: T, setValue: Dispatch<SetStateAction<T>>) => void
  listboxClassName?: string
}
