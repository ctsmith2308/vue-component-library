import type { ValidationRule } from '@/shared/ui';

interface FieldValidationResult {
  isValid: boolean;
  error?: string;
}

interface ParsedField {
  name: string;
  rules: ValidationRule;
  label?: string;
  initialValue?: unknown;
}

export type { FieldValidationResult, ParsedField };
