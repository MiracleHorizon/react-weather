import { useState } from 'react'

import { LayoutsMenu } from './LayoutsMenu'
import { ListLayout } from './ListLayout'
import { CardsLayout } from './CardsLayout'
import { DailyForecastPanelLayout } from 'models/DailyForecastPanelLayout'

export const DailyForecastPanel = () => {
  const [layout, setLayout] = useState(DailyForecastPanelLayout.LIST)

  return (
    <div className='flex flex-col py-[24px] px-[32px] mobile:px-[18px] rounded-t-[44px] bg-white'>
      <LayoutsMenu layout={layout} setLayout={setLayout} />
      {layout === DailyForecastPanelLayout.LIST && <ListLayout />}
      {layout === DailyForecastPanelLayout.CARDS && <CardsLayout />}
      {/*{layout === DailyForecastPanelLayout.CHART && <ScheduleLayout />}*/}
    </div>
  )
}
