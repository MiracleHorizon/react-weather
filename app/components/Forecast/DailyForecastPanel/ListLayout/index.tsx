import { observer } from 'mobx-react-lite'
import { useEventListener } from 'usehooks-ts'

import ForecastStore from 'stores/ForecastStore'
import { ListLayoutItem } from './ListLayoutItem'

export const ListLayout = observer(() => {
  useEventListener('keydown', e => {
    if (e.code === 'ArrowUp') {
      ForecastStore.setPrevDailyForecastReport()
    }

    if (e.code === 'ArrowDown') {
      ForecastStore.setNextDailyForecastReport()
    }
  })

  return (
    <ul>
      {ForecastStore.evenSelectedDailyForecastReports
        .slice(0, 4)
        .map(report => (
          <ListLayoutItem key={report.dt_txt} {...report} />
        ))}
    </ul>
  )
})
