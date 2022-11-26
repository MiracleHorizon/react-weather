import { ICoords } from './ICoords'

export interface ICity {
  id: number
  name: string
  coord: ICoords
  country: string
  population: number
  timezone: number
  sunrise: number
  sunset: number
}
