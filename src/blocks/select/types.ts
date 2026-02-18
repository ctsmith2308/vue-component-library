interface RadioInputType {
  groupName: string;
  id: string;
  value: string;
  label: string;
}

interface RadioInputGroup {
  radioInputs: RadioInputType[];
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

interface CheckboxData {
  id: string;
  name: string;
  label: string;
  value?: string;
  checked?: boolean;
}

export type { RadioInputType, RadioInputGroup, SelectInput, SelectInputOptions, SelectOption, SelectData, CheckboxData };
