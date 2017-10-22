import { EnumRule } from './enum-rule'

export const enumRuleIsActive = (rule: EnumRule) => {
  const [severity, applicable, value] = rule

  const isActive = severity > 0
  const isApplicable = applicable === 'always'
  const notEmpty = value.length > 0

  return isActive && isApplicable && notEmpty
}
