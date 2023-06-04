import HomeSection from '../HomeSection'
import { WeatherDetailsHandler } from '@utils/weather/WeatherDetailsHandler'
import type {
  BaseWeatherReport,
  CurrentWeatherReportModel
} from '@models/weather'
import type { UnitSystem } from '@models/UnitSystem'

export default function WeatherDetailsSection({
  wind,
  clouds,
  baseReport,
  unitSystem
}: Props) {
  const weatherDetailsHandler = new WeatherDetailsHandler({
    weatherReport: baseReport,
    wind,
    clouds,
    unitSystem
  })

  return (
    <HomeSection
      title='Details'
      items={weatherDetailsHandler.getDetailsList()}
    />
  )
}

interface Props extends Pick<CurrentWeatherReportModel, 'wind' | 'clouds'> {
  baseReport: BaseWeatherReport
  unitSystem: UnitSystem
}
