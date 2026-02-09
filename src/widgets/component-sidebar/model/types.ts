import type { Component } from 'vue';

interface ComponentRegistry {
  name: string;
  path: string;
  label: string;
  category: 'Form' | 'Layout' | 'Feedback' | 'Navigation' | 'Button' | 'Data' | 'Media' | 'Misc';
  description: string;
  examplesComponent: () => Promise<Component>;
}

export type { ComponentRegistry };
