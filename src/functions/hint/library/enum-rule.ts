type Severity = number
type Applicable = 'never' | 'always'
type Value = string[]

export type EnumRule = [Severity, Applicable, Value]
