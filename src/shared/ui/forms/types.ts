export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: unknown) => boolean | string;
  message?: string;
}

export interface FormField {
  name: string;
  value: unknown;
  rules?: ValidationRule[];
  error?: string;
}
