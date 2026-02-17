import type { DocSection } from '@/compositions/docs';
import BasicDoc from '../button/BasicExample.vue';
import ColorDoc from '../button/ColorExample.vue';
// import OutlineDoc from './OutlineDoc.vue';
// import TextDoc from './TextDoc.vue';
// import RaisedDoc from './RaisedDoc.vue';
// import RoundedDoc from './RoundedDoc.vue';
// import SizeDoc from './SizeDoc.vue';

const buttonExamplesConfig: DocSection[] = [
  { id: 'basic', label: 'Basic', component: BasicDoc },
  { id: 'color', label: 'Colors', component: ColorDoc },
  // { id: 'outline', label: 'Outline', component: OutlineDoc },
  // { id: 'text', label: 'Text', component: TextDoc },
  // { id: 'raised', label: 'Raised', component: RaisedDoc },
  // { id: 'rounded', label: 'Rounded', component: RoundedDoc },
  // { id: 'size', label: 'Sizes', component: SizeDoc },
];

export { buttonExamplesConfig };
