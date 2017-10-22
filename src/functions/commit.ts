import execa from 'execa'

export function commit(message: string, args: string[]) {
  execa('git', ['commit', ...args, '-m', message], {
    stdio: 'inherit', // preserve colors
  })
}
