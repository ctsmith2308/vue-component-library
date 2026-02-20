interface ValidationRule {
  required?: boolean;
  email?: boolean;
  url?: boolean;
  minLength?: number;
  maxLength?: number;
}

type InputType = 'text' | 'email' | 'password' | 'phone' | 'url' | 'number';

type MaskType = 'phone' | 'numeric' | 'alpha' | 'alpha_num' | 'alpha_dash';

interface TextInputProps {
  modelValue?: string;
  name: string;
  placeholder?: string;
  type?: InputType;
  label?: string;
  rules?: ValidationRule;
  mask?: MaskType;
  disabled?: boolean;
  fluid?: boolean;
}

type FieldValidationResult = string | null;

interface FormContext {
  updateValue: (name: string, value: unknown) => void;
  markTouched: (name: string) => void;
  getError: (name: string) => string | undefined;
  isRequired: (name: string) => boolean;
}

interface FormProps {
  customClass?: string;
}

interface ParsedField {
  name: string;
  rules: ValidationRule;
  initialValue?: unknown;
}

interface FormField {
  value: unknown;
  rules: ValidationRule;
  label?: string;
  error?: string;
  touched: boolean;
}

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
  // name: string;
  label: string;
  options: SelectOption[];
}

interface CheckboxData {
  id: string;
  // name: string;
  label: string;
  value?: string;
  checked?: boolean;
}

export type {
  TextInputProps,
  MaskType,
  ValidationRule,
  FieldValidationResult,
  FormContext,
  FormProps,
  ParsedField,
  FormField,
  RadioInputType,
  RadioInputGroup,
  SelectInput,
  SelectInputOptions,
  SelectOption,
  SelectData,
  CheckboxData,
};
