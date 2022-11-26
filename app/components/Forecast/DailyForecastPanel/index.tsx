import { observer } from 'mobx-react-lite'

import UiStore from 'stores/UiStore'
import { LayoutsMenu } from './LayoutsMenu'
import { ListLayout } from './ListLayout'
import { CardsLayout } from './CardsLayout'
import { DailyForecastPanelLayout } from 'models/enums/DailyForecastPanelLayout'

export const DailyForecastPanel = observer(() => {
  const { dailyForecastPanelLayout } = UiStore

  return (
    <div className='flex flex-col py-[24px] px-[32px] sm-max:px-[18px] rounded-t-[40px] bg-white'>
      <LayoutsMenu />
      {dailyForecastPanelLayout === DailyForecastPanelLayout.LIST && (
        <ListLayout />
      )}
      {dailyForecastPanelLayout === DailyForecastPanelLayout.CARDS && (
        <CardsLayout />
      )}
      {/*{dailyForecastPanelLayout === DailyForecastPanelLayout.CHART && <ScheduleLayout />}*/}
    </div>
  )
})
