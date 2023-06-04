import type { WeatherDetailsItem } from '@utils/weather/WeatherDetailsHandler'

export type Props = WithTitle | WithoutTitle

export type SectionItem = WeatherDetailsItem

interface Items {
  items: SectionItem[]
}

interface WithTitle extends Items {
  title: string
  withTitle?: boolean
}

interface WithoutTitle extends Items {
  title?: never
  withTitle: false
}
