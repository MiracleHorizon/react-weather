import UiStore from 'stores/UiStore'
import { LayoutsMenu } from './LayoutsMenu'
import { ListLayout } from './ListLayout'
import { CardsLayout } from './CardsLayout'
import { DailyForecastPanelLayout } from 'models/DailyForecastPanelLayout'

export const DailyForecastPanel = () => {
  const { dailyForecastPanelLayout } = UiStore

  return (
    <div className='flex flex-col py-[14px] px-[32px] mobile:px-[18px] rounded-t-[44px] bg-white'>
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
}
