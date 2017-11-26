import * as core from '@commitlint/core'
import chalk from 'chalk'

const fmt = chalk
const flags = {
  color: true,
  cwd:   process.cwd(),
  quiet: false,
}

const pkg = {
  name: 'nameUsedForCommitlintErrors',
}

export async function lint(message) {
  return commitlintLint(message).catch(err => {
    console.error(err)
    setTimeout(() => {
      if (err.type === pkg.name) {
        process.exit(1)
      }
      throw err
    })
  })
}

// code below was shamelessly stolen from https://github.com/marionebl/commitlint
async function commitlintLint(message) {
  const loaded = await core.load(getSeed(flags), { cwd: flags.cwd })
  const parserOpts = selectParserOpts(loaded.parserPreset)
  const opts = parserOpts ? { parserOpts } : undefined
  const report = await core.lint(message, loaded.rules, opts)
  const formatted = core.format(report, { color: flags.color })

  if (!flags.quiet) {
    console.log(`${fmt.grey('⧗')}   input: ${fmt.bold(message.split('\n')[0])}`)
    console.log(formatted.join('\n'))
  }

  if (report.errors.length > 0) {
    const error = new Error(formatted[formatted.length - 1])
    error.type = pkg.name
    throw error
  }
  console.log('')
}

function getSeed(seed) {
  const e = Array.isArray(seed.extends) ? seed.extends : [seed.extends]
  const n = e.filter(i => typeof i === 'string')
  return n.length > 0
    ? { extends: n, parserPreset: seed.parserPreset }
    : { parserPreset: seed.parserPreset }
}

function selectParserOpts(parserPreset) {
  if (typeof parserPreset !== 'object') {
    return undefined
  }

  const opts = parserPreset.opts

  if (typeof opts !== 'object') {
    return undefined
  }

  return opts.parserOpts
}
