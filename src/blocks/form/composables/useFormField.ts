import { type Ref, computed, inject } from 'vue';

import type { FormContext } from '../types';

function useFormField(name: Ref<string>) {
  const formContext = inject<FormContext | null>('formContext', null);

  const error = computed(() => formContext?.getError(name.value));

  const isRequired = computed(() => formContext?.isRequired(name.value) ?? false);

  const updateValue = (value: unknown): void => {
    formContext?.updateValue(name.value, value);
  };

  const markTouched = (): void => {
    formContext?.markTouched(name.value);
  };

  return { error, isRequired, updateValue, markTouched };
}

export { useFormField };
