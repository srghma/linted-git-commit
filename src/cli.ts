#!/usr/bin/env node

import { commit } from './functions/commit'
import { help }   from './functions/help'
import { lint }   from './functions/lint'

import {
  showHelp,
  getMessage,
  getGitArgs
} from './args_parser'

;(async () => {
  const args = process.argv.slice(2)

  if(showHelp(args)) return help()
  const message = getMessage(args)

  if(!message) return help()

  await lint(message)

  const gitArgs = getGitArgs(args)
  commit(message, gitArgs)
})().catch(console.error)
