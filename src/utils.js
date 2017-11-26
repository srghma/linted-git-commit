import * as R from 'ramda'

export const inList = R.flip(R.contains)

export const omitIndexes = R.curryN(2, R.compose(R.values, R.omit))

export const validIndex = index => index !== -1

export const propType = R.curryN(2, R.pipe(R.prop, R.type))
