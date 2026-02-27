import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { ProgressBar } from '@/blocks';

const meta = {
  title: 'Feedback/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'danger'] },
    mode: { control: 'select', options: ['determinate', 'indeterminate'] },
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
  },
  args: {
    value: 60,
    mode: 'determinate',
    color: 'primary',
    showValue: false,
    height: '1rem',
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { value: 75, showValue: true },
};

export const Indeterminate: Story = {
  args: { mode: 'indeterminate' },
};

export const Success: Story = {
  args: { value: 100, color: 'success', showValue: true },
};

export const Danger: Story = {
  args: { value: 20, color: 'danger', showValue: true },
};

export const Thin: Story = {
  args: { value: 50, height: '0.375rem' },
};

export const Thick: Story = {
  args: { value: 50, height: '2rem' },
};
