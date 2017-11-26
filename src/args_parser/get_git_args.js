import * as R from 'ramda'

import { rejectHelp } from './help'
import { rejectMessage } from './message'

export const getGitArgs = R.pipe(rejectHelp, rejectMessage)
