import type { WeatherDetailsItem } from '@utils/weather/WeatherDetailsHandler'

export interface Props {
  title: string
  items: SectionItem[]
}

export type SectionItem = WeatherDetailsItem
