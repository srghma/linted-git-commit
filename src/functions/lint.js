import execa from 'execa'

export function lint(message) {
  return execa
    .shell(`echo "${message}" | commitlint`, {
      stdio: 'inherit', // preserve colors
    })
    .then(() => true)
    .catch(() => false)
}
