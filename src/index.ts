#!/usr/bin/env node
import * as execa from 'execa'

import { main } from './main'

async function commit(message: string, options: string[]) {
  const c = execa('git', ['commit', ...options, '-m', message])
  c.stdout.pipe(process.stdout)
  c.stderr.pipe(process.stderr)
}

async function showHelp() {
  console.log('showHelp')
}

const args = process.argv.slice(2)
main(args, commit, showHelp).catch(console.error)
