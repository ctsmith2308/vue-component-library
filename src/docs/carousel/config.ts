import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';
import MultipleVisibleExample from './MultipleVisibleExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface CarouselProps {
  value: unknown[];
  numVisible?: number;
  numScroll?: number;
  circular?: boolean;
  autoplayInterval?: number;
  showIndicators?: boolean;
  showNavigators?: boolean;
}

const apiReferenceConfig = {
  data: [
    { name: 'value', type: 'unknown[]', default: 'undefined', description: 'Array of items to display in the carousel.' },
    { name: 'numVisible', type: 'number', default: '1', description: 'Number of items visible at once.' },
    { name: 'numScroll', type: 'number', default: '1', description: 'Number of items to advance per navigation step.' },
    { name: 'circular', type: 'boolean', default: 'false', description: 'Enables infinite looping.' },
    { name: 'autoplayInterval', type: 'number', default: '0', description: 'Interval in ms for auto-advance. Set to 0 to disable.' },
    { name: 'showIndicators', type: 'boolean', default: 'true', description: 'Shows dot indicators below the carousel.' },
    { name: 'showNavigators', type: 'boolean', default: 'true', description: 'Shows previous/next navigation buttons.' },
  ] satisfies Array<{ name: keyof CarouselProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const carouselSectionConfig: DocSection[] = [
  { id: 'carousel-api', label: 'API Reference', component: ApiReference },
  { id: 'carousel-basic', label: 'Basic', component: BasicExample },
  { id: 'carousel-multiple', label: 'Multiple Visible', component: MultipleVisibleExample },
];

export { apiReferenceConfig, carouselSectionConfig };
