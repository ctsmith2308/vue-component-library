import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';
import SizedExample from './SizedExample.vue';
import ErrorExample from './ErrorExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface ImageProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  preview?: boolean;
  imageClass?: string;
  imageStyle?: string;
}

const apiReferenceConfig = {
  data: [
    { name: 'src', type: 'string', default: 'undefined', description: 'URL of the image to display.' },
    { name: 'alt', type: 'string', default: `''`, description: 'Accessible alternative text.' },
    { name: 'width', type: 'string | number', default: 'undefined', description: 'Container width. Numbers are treated as px values.' },
    { name: 'height', type: 'string | number', default: 'undefined', description: 'Container height. Numbers are treated as px values.' },
    { name: 'preview', type: 'boolean', default: 'false', description: 'Enables a click-to-preview lightbox.' },
    { name: 'imageClass', type: 'string', default: `''`, description: 'Additional CSS classes applied to the img element.' },
    { name: 'imageStyle', type: 'string', default: `''`, description: 'Inline styles applied to the img element.' },
  ] satisfies Array<{ name: keyof ImageProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const imageSectionConfig: DocSection[] = [
  { id: 'image-api', label: 'API Reference', component: ApiReference },
  { id: 'image-basic', label: 'Basic', component: BasicExample },
  { id: 'image-sized', label: 'Sized', component: SizedExample },
  { id: 'image-error', label: 'Error Fallback', component: ErrorExample },
];

export { apiReferenceConfig, imageSectionConfig };
