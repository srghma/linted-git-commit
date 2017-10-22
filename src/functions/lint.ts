import execa from 'execa'

export function lint(message: string): Promise<boolean> {
  return execa
    .shell(`echo "${message}" | commitlint`, {
      stdio: 'inherit', // preserve colors
    })
    .then(() => true)
    .catch(() => false)
}
