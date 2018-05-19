#!/usr/bin/env node

import { commit } from './functions/commit'
import { help } from './functions/help'
import { lint } from './functions/lint'

import { showHelp, getMessage, getGitArgs } from './args_parser'

async function run() {
  const args = process.argv.slice(2)

  if (showHelp(args)) return help()
  const message = getMessage(args)

  if (!message) {
    console.log('> Error: empty message')
    return help()
  }

  const lintRes = await lint(message)
  if (!lintRes) process.exit(1)

  const gitArgs = getGitArgs(args)
  commit(message, gitArgs)
}

run().catch(console.error)
