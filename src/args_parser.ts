import * as R from 'ramda'
import { inList } from './utils'

export const showHelp = R.pipe(
  R.findIndex(inList(['-h', '--help'])),
  (res: number) => res !== -1
)

export const getMessage = (args: string[]) => {
  const messagePointerIndex = R.findIndex(R.equals('-m'), args)
  if (messagePointerIndex === -1) {
    return null
  } else {
    const messageIndex = messagePointerIndex + 1
    const message = args[messageIndex]
    return message
  }
}

export const getGitArgs = R.filter(inList(['-h', '--help', '-m']))
