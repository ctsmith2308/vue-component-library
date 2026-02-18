interface RadioInput {
  groupName: string;
  id: string;
  value: string;
  label: string;
}

interface RadioInputGroup {
  radioInputs: RadioInput[];
}

interface SelectInputOptions {
  value: string;
  displayValue: string;
}

interface SelectInput {
  name: string;
  id: string;
  label: string;
  options: SelectInputOptions[];
}

interface SelectOption {
  value: string;
  displayValue: string;
}

interface SelectData {
  id: string;
  name: string;
  label: string;
  options: SelectOption[];
}

export type { RadioInput, RadioInputGroup, SelectInput, SelectInputOptions, SelectOption, SelectData };
