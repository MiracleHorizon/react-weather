import { observer } from 'mobx-react-lite'

import ForecastStore from 'stores/ForecastStore'
import { TemperatureChart } from './Chart'

export const TemperatureChartSection = observer(() => {
  const { restrictions, labels, dataArray } = ForecastStore.temperatureChartData

  if (!restrictions || !labels || !dataArray) return null

  return (
    <section className='py-[30px] pl-[4px] mt-auto'>
      <TemperatureChart
        labels={labels}
        dataArray={dataArray}
        restrictions={restrictions}
      />
    </section>
  )
})
