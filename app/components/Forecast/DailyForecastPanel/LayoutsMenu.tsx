import classNames from 'classnames'
import { observer } from 'mobx-react-lite'

import UiStore from 'stores/UiStore'
import { ListSvg, CardsSvg, ChartSvg } from 'components/ui/svg'
import { DailyForecastPanelLayout } from 'models/enums/DailyForecastPanelLayout'

export const LayoutsMenu = observer(() => (
  <div className='flex self-center mb-[6px]'>
    {Object.values(DailyForecastPanelLayout).map(layoutName => (
      <button
        key={layoutName}
        className={classNames(
          'flex items-center justify-center w-[32px] h-[32px] ml-[4px]',
          layoutName === UiStore.dailyForecastPanelLayout
            ? 'fill-gray-600 stroke-gray-600'
            : 'fill-gray-300 stroke-gray-300'
        )}
        onClick={() => UiStore.setDailyForecastPanelLayout(layoutName)}
      >
        {layoutName === DailyForecastPanelLayout.LIST && <ListSvg />}
        {layoutName === DailyForecastPanelLayout.CARDS && <CardsSvg />}
        {layoutName === DailyForecastPanelLayout.CHART && <ChartSvg />}
      </button>
    ))}
  </div>
))
