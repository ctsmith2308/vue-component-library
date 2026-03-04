import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { CheckboxInput } from '@/blocks';

const meta = {
  title: 'Form/CheckboxInput',
  component: CheckboxInput,
  tags: ['autodocs'],
  args: {
    name: 'example',
    data: {
      id: 'checkbox-1',
      label: 'Accept terms and conditions',
      value: 'accepted',
      checked: false,
    },
    modelValue: false,
  },
} satisfies Meta<typeof CheckboxInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    modelValue: true,
    data: { id: 'checkbox-checked', label: 'Already checked', value: 'yes', checked: true },
  },
};

export const Required: Story = {
  args: {
    data: { id: 'checkbox-req', label: 'I agree to the privacy policy', value: 'agreed' },
    rules: { required: true },
  },
};
