import type { SunState } from '@models/SunState'

export interface CurrentWeatherSys extends SunState {
  id: number
  type: number
  country: string
}
