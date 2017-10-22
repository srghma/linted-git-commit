#!/usr/bin/env node

import { commit } from './functions/commit'
import { hint } from './functions/hint'
import { help } from './functions/help'
import { lint } from './functions/lint'

import { showHelp, getMessage, getGitArgs } from './args_parser'

import { error } from './colors'

;(async () => {
  const args = process.argv.slice(2)

  if (showHelp(args)) return hint()
  const message = getMessage(args)

  if (!message) {
    console.log(`${error('Error')}: empty message`)
    return help()
  }

  const lintRes = await lint(message)
  if (!lintRes) process.exit(1)

  console.log(args)
  const gitArgs = getGitArgs(args)
  console.log(gitArgs)
  commit(message, gitArgs)
})().catch(console.error)
