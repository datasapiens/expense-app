import { type DataItem } from '../../types'

/**
 * Calculates gradient offset
 */
export const gradientOffset = (data: DataItem[]) => {
  const dataMax = Math.max(...data.map((i) => i.value))
  const dataMin = Math.min(...data.map((i) => i.value))

  if (dataMax <= 0) {
    return 0
  }
  if (dataMin >= 0) {
    return 1
  }

  return dataMax / (dataMax - dataMin)
}
