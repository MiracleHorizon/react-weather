import { FC } from 'react'
import classNames from 'classnames'

import { ListSvg, CardsSvg, ChartSvg } from 'components/ui/svg'
import { DailyForecastPanelLayout } from 'models/DailyForecastPanelLayout'
import { SetState } from 'types/types'

export const LayoutsMenu: FC<Props> = ({ layout, setLayout }) => {
  const handleSetLayout = (layout: DailyForecastPanelLayout) => {
    setLayout(layout)
  }

  return (
    <div className='flex self-center'>
      {Object.values(DailyForecastPanelLayout).map(layoutName => (
        <button
          key={layoutName}
          className={classNames(
            'flex items-center justify-center w-[32px] h-[32px] ml-[4px]',
            layoutName === layout
              ? 'fill-gray-600 stroke-gray-600'
              : 'fill-gray-300 stroke-gray-300'
          )}
          onClick={() => handleSetLayout(layoutName)}
        >
          {layoutName === DailyForecastPanelLayout.LIST && <ListSvg />}
          {layoutName === DailyForecastPanelLayout.CARDS && <CardsSvg />}
          {layoutName === DailyForecastPanelLayout.CHART && <ChartSvg />}
        </button>
      ))}
    </div>
  )
}

interface Props {
  layout: DailyForecastPanelLayout
  setLayout: SetState<DailyForecastPanelLayout>
}
