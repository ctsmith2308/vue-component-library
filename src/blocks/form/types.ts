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

export type {
  TextInputProps,
  MaskType,
  ValidationRule,
  FieldValidationResult,
  FormContext,
  FormProps,
  ParsedField,
  FormField,
};
