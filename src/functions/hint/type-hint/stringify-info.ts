import * as R from 'ramda'
import * as RA from 'ramda-adjunct'
import { hint } from '~/colors'

const getNames = R.keys
const getDescrs = R.pipe(R.values, R.map(R.prop('description')))

const pad = (arr: string[]) => {
  const lengths = R.map(R.prop('length') as any)(arr)
  const maxLength = R.apply(Math.max, lengths)
  console.log(arr, lengths)
  console.log(maxLength)
}

export default function stringifyInfo(info: object) {
  const rows = R.converge(R.zipObj, [
    R.pipe(getNames, R.map(RA.concatRight(':')), pad),
    R.pipe(getDescrs, R.map(hint)),
  ])(info)

  const strings: string[] = R.map(R.join(' '))(rows)
  const table = R.join('\n', strings)
  return table
}
