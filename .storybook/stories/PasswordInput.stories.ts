import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { PasswordInput } from '@/blocks';

const meta = {
  title: 'Form/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  args: {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    minLength: 12,
    disabled: false,
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const ShortMinLength: Story = {
  args: { label: 'PIN', minLength: 4, placeholder: 'Enter 4-digit PIN' },
};
