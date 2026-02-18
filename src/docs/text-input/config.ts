import { type Component } from 'vue';

import TextInputExample from './TextInputExample.vue';
import TextInputMaskExamples from './TextInputMaskExamples.vue';
import TextInputWithFormExample from './TextInputWithFormExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

const exampleConfig: DocSection[] = [
  { id: 'text-input', label: 'Text Input', component: TextInputExample },
  { id: 'text-input-masks', label: 'Input Mask', component: TextInputMaskExamples },
  { id: 'text-input-form', label: 'Form', component: TextInputWithFormExample },
];

export { exampleConfig };
