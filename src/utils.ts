import * as R from 'ramda'

export const inList = R.flip(R.contains)

interface OmitIndexes {
  <T>(is: number[], arr: T[]): T[]
  (is: number[]): <T>(arr: T[]) => T[]
}

export const omitIndexes: OmitIndexes = R.curryN(2, R.compose(R.values, R.omit));

export const validIndex = (index: number) => index !== -1

export const propType = R.curryN(2, R.pipe(R.prop, R.type))
