import type { Coords } from './Coords'
import type { SunState } from '@models/SunState'

export interface ForecastCity extends SunState {
  id: number
  name: string
  coord: Coords
  country: string
  population: number
  timezone: number
}
