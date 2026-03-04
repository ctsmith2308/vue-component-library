import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';

import { TextInput } from '@/blocks';

const meta = {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'phone', 'url', 'number'] },
    mask: { control: 'select', options: [undefined, 'phone', 'numeric', 'alpha', 'alpha_num', 'alpha_dash'] },
  },
  args: {
    name: 'example',
    placeholder: 'Placeholder...',
    type: 'text',
    disabled: false,
    fluid: false,
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { label: 'Full Name', name: 'fullName' },
};

export const EmailType: Story = {
  args: { label: 'Email', name: 'email', type: 'email', placeholder: 'you@example.com' },
};

export const Disabled: Story = {
  args: { label: 'Disabled', name: 'disabled', disabled: true, modelValue: 'Read only value' },
};

export const Fluid: Story = {
  args: { label: 'Fluid', name: 'fluid', fluid: true },
};

export const PhoneMask: Story = {
  args: { label: 'Phone', name: 'phone', mask: 'phone', placeholder: '(555) 000-0000' },
};

export const WithValidation: Story = {
  args: {
    label: 'Required Email',
    name: 'email',
    type: 'email',
    rules: { required: true, email: true },
  },
};
