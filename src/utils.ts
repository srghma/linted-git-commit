import * as R from 'ramda'

export const inList = R.flip(R.contains)

interface OmitIndexes {
  <T>(is: number[], arr: T[]): T[]
  (is: number[]): <T>(arr: T[]) => T[]
}
export const omitIndexes: OmitIndexes = R.curryN(2, function(
  is: number[],
  arr: any[]
) {
  const reject = R.addIndex(R.reject)
  const rejectedIs = (_: any, i: any) => R.contains(i, is)
  const ret = reject(rejectedIs, arr)
  return ret
})
