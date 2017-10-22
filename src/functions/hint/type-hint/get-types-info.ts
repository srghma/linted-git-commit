import * as R from 'ramda'

import settings from '../settings'
import { EnumRule } from '../library'

export default function getTypesInfo(types: EnumRule) {
  const [,,values] = types
  return R.pickAll(values, settings.type.enumerables)
}
