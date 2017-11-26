import execa from 'execa'

export function commit(message, args) {
  execa('git', ['commit', ...args, '-m', message], {
    stdio: 'inherit', // preserve colors
  })
}
