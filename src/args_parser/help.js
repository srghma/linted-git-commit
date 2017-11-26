import * as R from 'ramda'
import { validIndex, inList } from '../utils'

const helpArgs = ['-h', '--help']

export const showHelp = R.pipe(R.findIndex(inList(helpArgs)), validIndex)

export const rejectHelp = R.reject(inList(helpArgs))
