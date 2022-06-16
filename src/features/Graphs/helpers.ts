import { type Transaction } from '../../data'
import { type DataItem } from './types'

/**
 * Builds Graph data in consumable format for graphs
 */
export const buildGraphData = (data: Transaction[]) =>
  data.reduce((accumulator, currentValue) => {
    const item =
      accumulator.length > 0 && accumulator.find(({ name }) => name === currentValue.category)
    if (item) {
      item.value += currentValue.amount
    } else accumulator.push({ name: currentValue.category, value: currentValue.amount })
    return accumulator
  }, [] as DataItem[])
