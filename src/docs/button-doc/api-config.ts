import type { ApiSection, PropsTableData, SlotsTableData } from '@/compositions/docs';

const buttonApiConfig: ApiSection<PropsTableData | SlotsTableData>[] = [
  {
    id: 'props',
    label: 'Props',
    data: [
      {
        name: 'label',
        type: 'string',
        default: 'undefined',
        description: 'Text of the button.',
      },
      {
        name: 'color',
        type: `'primary' | 'secondary' | 'success' | 'danger'`,
        default: `'primary'`,
        description: 'Color of the button',
      },
      {
        name: 'size',
        type: `'sm' | 'md' | 'lg' | 'xl' | 'jumbo'`,
        default: `'md'`,
        description: 'Size of the button.',
      },
      {
        name: 'variant',
        type: `'outlined' | 'link' | 'text'`,
        default: 'undefined',
        description: 'Variant styling of the button.',
      },
      {
        name: 'raised',
        type: 'boolean',
        default: 'false',
        description: 'Adds box shadow to the button.',
      },
      {
        name: 'rounded',
        type: 'boolean',
        default: 'false',
        description: 'Gives rounded border to the button.',
      },
      {
        name: 'loading',
        type: 'boolean',
        default: 'false',
        description: 'Indicates the loading status of the button.',
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Indicates the disabled status of the button',
      },
    ],
    columns: [
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'default', header: 'Default' },
      { field: 'description', header: 'Description' },
    ],
  },
  {
    id: 'slots',
    label: 'Slots',
    data: [
      {
        name: 'icon',
        description: 'Slotted content for icon.',
      },
    ],
    columns: [
      { field: 'name', header: 'Name' },
      { field: 'description', header: 'Description' },
    ],
  },
];

export { buttonApiConfig };
