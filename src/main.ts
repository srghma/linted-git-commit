import * as R from 'ramda'
import { assertNotNil } from 'ramda-asserters'
import { omitIndexes, inList } from './utils'

type CommitFn = (message: string, options: string[]) => Promise<void>
type HelpFn = () => Promise<void>

export async function main(args: string[], commit: CommitFn, help: HelpFn) {
  const helpIndex = R.findIndex(inList(['-h', '--help']), args)
  if (helpIndex !== -1) {
    return help()
  }

  const messagePointerIndex = R.findIndex(inList(['-m', '--message']), args)
  if (messagePointerIndex === -1) {
    return help()
  }

  const messageIndex = (messagePointerIndex as number) + 1
  const message = args[messageIndex]
  assertNotNil(message)

  const options = omitIndexes(
    [helpIndex, messagePointerIndex, messageIndex],
    args
  )

  return commit(message, options)
}
