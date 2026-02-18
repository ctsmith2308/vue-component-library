import { type Component } from 'vue';
import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';

interface DocSection { id: string; label: string; component: Component; }
interface AvatarProps {
  image?: string;
  label?: string;
  icon?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
}

const apiReferenceConfig = {
  data: [
    { name: 'label', type: 'string', default: 'undefined', description: 'Full name used to generate initials when no image is provided.' },
    { name: 'image', type: 'string', default: 'undefined', description: 'URL of the avatar image.' },
    { name: 'icon', type: 'boolean', default: 'false', description: 'When true renders the icon slot instead of initials.' },
    { name: 'size', type: `'sm' | 'md' | 'lg' | 'xl'`, default: `'md'`, description: 'Dimensions of the avatar.' },
    { name: 'shape', type: `'circle' | 'square'`, default: `'circle'`, description: 'Shape of the avatar container.' },
  ] satisfies Array<{ name: keyof AvatarProps | string; type: string; default: string; description: string }>,
  columns: [
    { field: 'name', header: 'Name' }, { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' }, { field: 'description', header: 'Description' },
  ],
};

const avatarSectionConfig: DocSection[] = [
  { id: 'avatar-api', label: 'API Reference', component: ApiReference },
  { id: 'avatar-basic', label: 'Basic', component: BasicExample },
];

export { apiReferenceConfig, avatarSectionConfig };