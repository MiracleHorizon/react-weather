import { observer } from 'mobx-react-lite'

import ForecastStore from 'stores/ForecastStore'
import { CardsLayoutItem } from './CardsLayoutItem'

export const CardsLayout = observer(() => (
  <div className='flex justify-between h-[280px] py-[24px]'>
    {ForecastStore.evenSelectedDailyForecastReports
      .slice(0, 3)
      .map((report, index) => (
        <CardsLayoutItem key={report.dt_txt} index={index} {...report} />
      ))}
  </div>
))
