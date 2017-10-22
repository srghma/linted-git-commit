import * as R from 'ramda'
import { validIndex, omitIndexes } from '../utils'

const getPointerIndex = R.findIndex(R.equals('-m'))

export const getMessage = (args: string[]) => {
  const pointerIndex = getPointerIndex(args)

  return validIndex(pointerIndex) ?
    args[pointerIndex + 1] :
    null
}

// reject message and its pointer
export const rejectMessage = (args: string[]) => {
  const pointerIndex = getPointerIndex(args)

  if(!validIndex(pointerIndex)) return args

  const messageIndex = pointerIndex + 1
  return omitIndexes([pointerIndex, messageIndex], args)
}
