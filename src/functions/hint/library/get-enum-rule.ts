import * as R from 'ramda'

import { EnumRule } from './enum-rule'

export const getEnumRule = R.curryN(2, (name: string, config: object) => {
  return R.path<EnumRule>(['rules', `${name}-enum`], config)
})
