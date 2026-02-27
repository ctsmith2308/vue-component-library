import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { ProgressSpinner } from '@/blocks';

const meta = {
  title: 'Feedback/ProgressSpinner',
  component: ProgressSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'danger'] },
    strokeWidth: { control: 'text' },
  },
  args: {
    size: 'md',
    color: 'primary',
    strokeWidth: '4',
  },
} satisfies Meta<typeof ProgressSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: 'sm' } };
export const Large: Story = { args: { size: 'lg' } };
export const XL: Story = { args: { size: 'xl' } };

export const Secondary: Story = { args: { color: 'secondary' } };
export const Success: Story = { args: { color: 'success' } };
export const Danger: Story = { args: { color: 'danger' } };

export const ThickStroke: Story = { args: { strokeWidth: '8' } };
