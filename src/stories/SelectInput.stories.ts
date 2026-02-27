import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { SelectInput } from '@/blocks';

const defaultData = {
  id: 'country-select',
  label: 'Country',
  options: [
    { value: 'us', displayValue: 'United States' },
    { value: 'gb', displayValue: 'United Kingdom' },
    { value: 'ca', displayValue: 'Canada' },
    { value: 'au', displayValue: 'Australia' },
  ],
};

const meta = {
  title: 'Form/SelectInput',
  component: SelectInput,
  tags: ['autodocs'],
  args: {
    name: 'country',
    data: defaultData,
  },
} satisfies Meta<typeof SelectInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ManyOptions: Story = {
  args: {
    data: {
      id: 'lang-select',
      label: 'Language',
      options: [
        { value: 'en', displayValue: 'English' },
        { value: 'es', displayValue: 'Spanish' },
        { value: 'fr', displayValue: 'French' },
        { value: 'de', displayValue: 'German' },
        { value: 'zh', displayValue: 'Chinese' },
        { value: 'ja', displayValue: 'Japanese' },
        { value: 'pt', displayValue: 'Portuguese' },
      ],
    },
  },
};

export const Required: Story = {
  args: {
    rules: { required: true },
  },
};
