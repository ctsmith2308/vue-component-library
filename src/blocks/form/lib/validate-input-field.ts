import type { ValidationRule } from '../types';

type ValidatorFn = (value: unknown, fieldName: string, rules?: ValidationRule) => string | null;

const validators: Record<keyof ValidationRule, ValidatorFn> = {
  required: (value, fieldName) => {
    const isEmptyArray = Array.isArray(value) && value.length === 0;
    const hasValue = !isEmptyArray && !!value;

    return hasValue ? null : `${fieldName} is required`;
  },

  email: (value) => {
    const hasEmailMatch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value));

    return hasEmailMatch ? null : 'Please enter a valid email address';
  },

  url: (value) => {
    try {
      new URL(String(value));
      return null;
    } catch {
      return 'Please enter a valid URL';
    }
  },

  minLength: (value, fieldName, rules) => {
    const isMinLength = String(value).length >= rules!.minLength!;

    return isMinLength ? null : `${fieldName} must be at least ${rules!.minLength} characters`;
  },

  maxLength: (value, fieldName, rules) => {
    const isMaxLength = String(value).length <= rules!.maxLength!;

    return isMaxLength ? null : `${fieldName} must be at most ${rules!.maxLength} characters`;
  },
};

const validatorOrder: Array<keyof ValidationRule> = ['required', 'email', 'url', 'minLength', 'maxLength'];

const validateField = (value: unknown, rules: ValidationRule, fieldName: string): string | undefined => {
  for (const key of validatorOrder) {
    if (key in rules) {
      const error = validators[key]?.(value, fieldName, rules);

      if (error) return error;
    }
  }
};

export { validateField };
