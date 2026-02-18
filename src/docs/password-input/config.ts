import { type Component } from 'vue';

import PasswordExample from './PasswordExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

const exampleConfig: DocSection[] = [{ id: 'api-ref', label: 'Api Reference', component: PasswordExample }];

export { exampleConfig };
