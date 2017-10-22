import dedent from 'dedent'

import { header, command, option } from '~/colors'

const message = dedent`
${header('Usage')}:
  $ ${command('linted-git-commit')} ${option('[...<git options>] [-h | --help] [-m <msg>] [...<git options>]')}
${header('Options')}:
  ${option('-h, --help')}
    Shows help, such as possible
  ${option('-m <msg>')}
    Linted commit message
  ${option('...<git options>')}
    All other options are passed to git as they are
`

export function help() {
  console.log(message)
}
