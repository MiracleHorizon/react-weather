import classNames from 'classnames'

import UiStore from 'stores/UiStore'
import { ListSvg, CardsSvg, ChartSvg } from 'components/ui/svg'
import { DailyForecastPanelLayout } from 'models/DailyForecastPanelLayout'

export const LayoutsMenu = () => (
  <div className='flex self-center'>
    {Object.values(DailyForecastPanelLayout).map(layoutName => (
      <button
        key={layoutName}
        className={classNames(
          'flex items-center justify-center w-[32px] h-[32px] ml-[4px]',
          layoutName === UiStore.dailyForecastPanelLayout
            ? 'fill-gray-600 stroke-gray-600'
            : 'fill-gray-300 stroke-gray-300'
        )}
        onClick={() => (UiStore.dailyForecastPanelLayout = layoutName)}
      >
        {layoutName === DailyForecastPanelLayout.LIST && <ListSvg />}
        {layoutName === DailyForecastPanelLayout.CARDS && <CardsSvg />}
        {layoutName === DailyForecastPanelLayout.CHART && <ChartSvg />}
      </button>
    ))}
  </div>
)
