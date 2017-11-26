import R from 'ramda'
import cosmiconfig from 'cosmiconfig'
import marked from 'marked'
import TerminalRenderer from 'marked-terminal'

marked.setOptions({
  renderer: new TerminalRenderer(),
})

export async function help() {
  const help = await getHelpText()

  if (help) {
    showHelp(help)
  } else {
    showError()
  }
}

async function showHelp(text) {
  console.log(marked(text))
}

async function showError() {
  const errorText = '> Error: Please add `help` to your commitlintrc'

  console.log(marked(errorText))
}

async function getHelpText() {
  const cwd = process.cwd()
  const lintConfig = await loadConfig(cwd)

  const help = R.path(['config', 'help'], lintConfig)

  return help
}

// shamelessly stolen from
// https://github.com/marionebl/commitlint/blob/master/%40commitlint/core/src/load.js
async function loadConfig(cwd) {
  const explorer = cosmiconfig('commitlint', {
    rcExtensions: true,
  })

  const local = await explorer.load(cwd)

  if (local) {
    return local
  }

  return {}
}
