import { echartOptionProfixHandle, publicConfig } from '@/packages/public'
import { BarCrossrangefig } from './index'
import { CreateComponentType } from '@/packages/index.d'
import omit from 'lodash/omit'
import cloneDeep from 'lodash/cloneDeep'

export const includes = ['legend', 'xAxis', 'yAxis']

const option = echartOptionProfixHandle(
  {
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        show: true,
        type: 'shadow'
      }
    },
    legend: {
      show: true,
    },
    xAxis: {
      show: true,
      type: 'value',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      show: true,
      type: 'category'
    },
    series: [
      {
        name: 'data1',
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130]
      },
      {
        name: 'data2',
        type: 'bar',
        data: [130, 130, 312, 268, 155, 117, 160]
      }
    ]
  },
  includes
)

export default class Config extends publicConfig
  implements CreateComponentType {
  public key: string = BarCrossrangefig.key
  public chartConfig = omit(cloneDeep(BarCrossrangefig), ['node'])
  // 图表配置项
  public option = option
}