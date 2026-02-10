import type { Component } from 'vue';

interface ComponentRegistry {
  name: string;
  path: string;
  label: string;
  category: 'Form' | 'Layout' | 'Feedback' | 'Navigation' | 'Button' | 'Data' | 'Media' | 'Misc';
  description: string;
  examplesComponent: () => Promise<Component>;
}

interface FormContext {
  updateValue: (name: string, value: unknown) => void;
  markTouched: (name: string) => void;
  getError: (name: string) => string | undefined;
  isRequired: (name: string) => boolean;
}

export type { ComponentRegistry, FormContext };
