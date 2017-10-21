import execa from 'execa'

export function lint(message: string): Promise<boolean> {
  return execa
    .shell(`echo "${message}" | commitlint`)
    .then(res => {
      console.log(res)
      return true
    })
    .catch(res => {
      console.error(res)
      return Promise.resolve(false)
    })
}
