import { FC } from 'react'
import classNames from 'classnames'

import { SetState } from 'types/types'
import { DailyForecastPanelLayout } from 'models/DailyForecastPanelLayout'

export const LayoutsMenu: FC<Props> = ({ layout, setLayout }) => {
  const handleSetLayout = (layout: DailyForecastPanelLayout) => {
    setLayout(layout)
  }

  return (
    <div className='flex self-end'>
      {Object.values(DailyForecastPanelLayout).map(layoutName => (
        <button
          key={layoutName}
          className={classNames('w-[25px] h-[25px] ml-[4px]', {
            ['bg-blue-500']: layout === layoutName,
            ['bg-red-400']: layout !== layoutName,
          })}
          onClick={() => handleSetLayout(layoutName)}
        />
      ))}
    </div>
  )
}

interface Props {
  layout: DailyForecastPanelLayout
  setLayout: SetState<DailyForecastPanelLayout>
}
