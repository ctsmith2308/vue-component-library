interface ValidationRule {
  required?: boolean | string;
  min?: number | { value: number; message?: string };
  max?: number | { value: number; message?: string };
  minLength?: number | { value: number; message?: string };
  maxLength?: number | { value: number; message?: string };
  pattern?: RegExp | { value: RegExp; message?: string };
  email?: boolean | string;
  url?: boolean | string;
  numeric?: boolean | string;
  alpha?: boolean | string;
  alpha_num?: boolean | string;
  alpha_dash?: boolean | string;
  custom?: (value: unknown, allValues: Record<string, unknown>) => boolean | string | Promise<boolean | string>;
}

interface FormProps {
  customClass?: string;
}

interface FormField {
  name: string;
  value: unknown;
  rules?: ValidationRule[];
  error?: string;
}

interface FormContext {
  updateValue: (name: string, value: unknown) => void;
  markTouched: (name: string) => void;
  getError: (name: string) => string | undefined;
  isRequired: (name: string) => boolean;
}

interface RuleWithMessage<T> {
  value: T;
  message?: string;
}

export type { ValidationRule, FormField, FormProps, FormContext, RuleWithMessage };
