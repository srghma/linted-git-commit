const message = `Usage:
  $ linted-git-commit [...<git options>] [-h | --help] [-m <msg>] [...<git options>]
Options:
  -h, --help
    Shows help, such as possible
  -m <msg>
    Linted commit message`

export async function help() {
  console.log(message)
}
