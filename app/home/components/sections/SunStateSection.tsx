import HomeSection from '../HomeSection'
import { getHourCycleCookie } from '@lib/cookies/getHourCycleCookie'
import type { SunState } from '@models/SunState'
import type { DayDuration } from '@models/DayDuration'

export default function SunStateSection({
  sunset,
  sunrise,
  dayDuration
}: Props) {
  const { hourCycleCookie: hourCycle } = getHourCycleCookie()
  const items = [
    {
      title: 'Sunrise',
      value: formatDate(sunrise),
      iconClassName: 'wi-sunrise transform translate-y-[2px]'
    },
    {
      title: 'Sunset',
      value: formatDate(sunset),
      iconClassName: 'wi-sunset transform translate-y-[2px]'
    },
    {
      title: 'Day duration',
      value: `${dayDuration.hours}h ${dayDuration.minutes}m`,
      iconClassName: `wi-time-3 wi-fw w-[25px] transform translate-y-[2px]`
    }
  ]

  function formatDate(dateTimestamp: number) {
    const date = new Date(dateTimestamp)
    const locale = 'en-US'
    const dateOptions: Intl.DateTimeFormatOptions = {
      hourCycle,
      hour: '2-digit',
      minute: '2-digit'
    }
    return Intl.DateTimeFormat(locale, dateOptions).format(date)
  }

  return <HomeSection title='Sunrise/Sunset' items={items} />
}

interface Props extends SunState {
  dayDuration: DayDuration
}
