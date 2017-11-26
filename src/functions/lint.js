import execa from 'execa'

export const lint = message =>
  execa
    .shell(`echo "${message}" | commitlint`, {
      stdio: 'inherit', // preserve colors
    })
    .then(() => true)
    .catch(() => false)
