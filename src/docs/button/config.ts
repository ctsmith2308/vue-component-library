import { type Component } from 'vue';

import ColorDoc from './ColorExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

const buttonSectionExamplesConfig: DocSection[] = [{ id: 'color', label: 'Colors', component: ColorDoc }];

export { buttonSectionExamplesConfig };
