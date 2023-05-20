import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { FC, useMemo } from 'react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const TEMPERATURE_CHART_OPTIONS = {
  responsive: true,
  events: ['click'],
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltip: {
      usePointStyle: true
    }
  },
  interaction: {
    mode: 'point'
  },
  intersect: true
}

// todo tree shaking
export const TemperatureChart: FC<Props> = ({
  restrictions: { max, min },
  dataArray,
  labels
}) => {
  const options = useMemo(
    () => ({
      ...TEMPERATURE_CHART_OPTIONS,
      scales: {
        x: {
          grid: {
            display: false
          },
          time: {
            tooltipFormat: 'DD T'
          }
        },
        y: {
          min,
          max,
          grid: {
            display: false
          }
        }
      }
    }),
    [max, min]
  )

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: 'Temperature',
          data: dataArray,
          borderColor: 'rgb(153,102,254)',
          backgroundColor: 'rgba(153,102,254, 0.5)',
          pointRadius: 4
        }
      ]
    }),
    [dataArray, labels]
  )

  //@ts-ignore
  return <Line options={options} data={data} />
}

interface Props {
  restrictions: {
    max: number
    min: number
  }
  labels: string[]
  dataArray: number[]
}
