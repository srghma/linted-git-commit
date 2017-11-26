import * as core from '@commitlint/core'

import typeHint from './type-hint'

export async function hint() {
  const lintConfig = await core.load({}, { cwd: process.cwd() })
  const a = "a"

  console.log(typeHint(lintConfig))
}
