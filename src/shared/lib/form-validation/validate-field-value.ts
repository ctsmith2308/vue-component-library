import type { FieldValidationResult } from './types';
import type { ValidationRule } from '@/shared/ui';

async function validateFieldValue(
  value: unknown,
  rules: ValidationRule,
  fieldLabel: string,
  allValues: Record<string, unknown> = {},
): Promise<FieldValidationResult> {
  // Required validation
  if (rules.required) {
    const isEmpty = value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0);

    if (isEmpty) {
      const message = typeof rules.required === 'string' ? rules.required : `${fieldLabel} is required`;

      return { isValid: false, error: message };
    }
  }

  // Skip other validations if value is empty and not required
  if (!value && !rules.required) {
    return { isValid: true };
  }

  // Min validation (for numbers)
  if (rules.min !== undefined) {
    const minValue = typeof rules.min === 'number' ? rules.min : rules.min.value;
    const minMessage = typeof rules.min === 'number' ? undefined : rules.min.message;

    if (Number(value) < minValue) {
      const message = minMessage || `${fieldLabel} must be at least ${minValue}`;

      return { isValid: false, error: message };
    }
  }

  // Max validation (for numbers)
  if (rules.max !== undefined) {
    const maxValue = typeof rules.max === 'number' ? rules.max : rules.max.value;
    const maxMessage = typeof rules.max === 'number' ? undefined : rules.max.message;

    if (Number(value) > maxValue) {
      const message = maxMessage || `${fieldLabel} must be at most ${maxValue}`;

      return { isValid: false, error: message };
    }
  }

  // MinLength validation
  if (rules.minLength !== undefined) {
    const minLen = typeof rules.minLength === 'number' ? rules.minLength : rules.minLength.value;
    const minLenMessage = typeof rules.minLength === 'number' ? undefined : rules.minLength.message;

    if (String(value).length < minLen) {
      const message = minLenMessage || `${fieldLabel} must be at least ${minLen} characters`;

      return { isValid: false, error: message };
    }
  }

  // MaxLength validation
  if (rules.maxLength !== undefined) {
    const maxLen = typeof rules.maxLength === 'number' ? rules.maxLength : rules.maxLength.value;
    const maxLenMessage = typeof rules.maxLength === 'number' ? undefined : rules.maxLength.message;

    if (String(value).length > maxLen) {
      const message = maxLenMessage || `${fieldLabel} must be at most ${maxLen} characters`;

      return { isValid: false, error: message };
    }
  }

  // Pattern validation
  if (rules.pattern) {
    const pattern = rules.pattern instanceof RegExp ? rules.pattern : rules.pattern.value;
    const patternMessage = rules.pattern instanceof RegExp ? undefined : rules.pattern.message;

    if (!pattern.test(String(value))) {
      const message = patternMessage || `${fieldLabel} format is invalid`;

      return { isValid: false, error: message };
    }
  }

  // Email validation
  if (rules.email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(String(value))) {
      const message = typeof rules.email === 'string' ? rules.email : 'Please enter a valid email address';

      return { isValid: false, error: message };
    }
  }

  // URL validation
  if (rules.url) {
    try {
      new URL(String(value));
    } catch {
      const message = typeof rules.url === 'string' ? rules.url : 'Please enter a valid URL';

      return { isValid: false, error: message };
    }
  }

  // Numeric validation
  if (rules.numeric) {
    if (isNaN(Number(value))) {
      const message = typeof rules.numeric === 'string' ? rules.numeric : `${fieldLabel} must be a number`;

      return { isValid: false, error: message };
    }
  }

  // Alpha validation (letters only)
  if (rules.alpha) {
    const alphaPattern = /^[a-zA-Z]+$/;

    if (!alphaPattern.test(String(value))) {
      const message = typeof rules.alpha === 'string' ? rules.alpha : `${fieldLabel} must contain only letters`;

      return { isValid: false, error: message };
    }
  }

  // Alpha-numeric validation (letters and numbers)
  if (rules.alpha_num) {
    const alphaNumPattern = /^[a-zA-Z0-9]+$/;

    if (!alphaNumPattern.test(String(value))) {
      const message =
        typeof rules.alpha_num === 'string' ? rules.alpha_num : `${fieldLabel} must contain only letters and numbers`;

      return { isValid: false, error: message };
    }
  }

  // Alpha-dash validation (letters, numbers, dashes, and underscores)
  if (rules.alpha_dash) {
    const alphaDashPattern = /^[a-zA-Z0-9_-]+$/;

    if (!alphaDashPattern.test(String(value))) {
      const message =
        typeof rules.alpha_dash === 'string'
          ? rules.alpha_dash
          : `${fieldLabel} must contain only letters, numbers, dashes, and underscores`;

      return { isValid: false, error: message };
    }
  }

  // Custom validation
  if (rules.custom) {
    const result = await rules.custom(value, allValues);

    if (result !== true) {
      const message = typeof result === 'string' ? result : `${fieldLabel} is invalid`;

      return { isValid: false, error: message };
    }
  }

  return { isValid: true };
}

export { validateFieldValue };
