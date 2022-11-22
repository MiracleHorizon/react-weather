import { observer } from 'mobx-react-lite'

import ForecastStore from 'stores/ForecastStore'
import { ListLayoutItem } from './ListLayoutItem'

export const ListLayout = observer(() => (
  <div className='py-[12px]'>
    <ul>
      {ForecastStore.evenSelectedDailyForecastReports
        .slice(0, 4)
        .map(report => (
          <ListLayoutItem key={report.dt_txt} {...report} />
        ))}
    </ul>
  </div>
))
