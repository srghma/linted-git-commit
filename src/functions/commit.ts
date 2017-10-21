import execa from 'execa'

export function commit(message: string, args: string[]) {
  const options = {
    // preserve colors
    stdio: 'inherit',
  }
  execa.sync('git', ['commit', ...args, '-m', message], options)
}
