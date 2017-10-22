import { header, disabled } from '~/colors'

import { enumRuleIsActive, getEnumRule } from '../library'
import getTypesInfo from './get-types-info'
import stringifyInfo from './stringify-info'

export default function typeHint(lintConfig: object) {
  let head = header('Possible types: ')

  const types = getEnumRule('type', lintConfig)
  if (!types) {
    return head + disabled('none')
  }

  if (!enumRuleIsActive(types)) {
    return head + disabled('disabled')
  }

  const info = getTypesInfo(types)
  return head + '\n' + stringifyInfo(info)
}
