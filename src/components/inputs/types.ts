interface RadioInput {
  groupName: string
  id: string
  value: string
  label: string
}

interface RadioInputGroup {
  radioInputs: RadioInput[]
}

interface SelectInputOptions {
  value: string
  displayValue: string
}

interface SelectInput {
  name: string
  id: string
  label: string
  options: SelectInputOptions[]
}

export type { RadioInput, RadioInputGroup, SelectInput, SelectInputOptions }
