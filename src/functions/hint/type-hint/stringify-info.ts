import * as R from 'ramda'
import { hint } from '~/colors'

export default function stringifyInfo(info: object) {
  const typeDescriptions = R.mapObjIndexed(v => R.prop('description', v), info)

  const coloredTypeDescriptions = R.mapObjIndexed(v => hint(v), typeDescriptions)
  const rows = R.toPairs(coloredTypeDescriptions)

  const strings = R.map(R.join(': '))(rows)
  const table = R.join('\n', strings)
  return table
}
