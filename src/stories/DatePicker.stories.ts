import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { DatePicker } from '@/blocks';

const meta = {
  title: 'Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: {
    placeholder: 'Select date',
    disabled: false,
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPreselectedDate: Story = {
  args: {
    modelValue: new Date(2025, 5, 15), // June 15 2025
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithMinDate: Story = {
  args: {
    minDate: new Date(),
    placeholder: 'Future dates only',
  },
};

export const WithMaxDate: Story = {
  args: {
    maxDate: new Date(),
    placeholder: 'Past dates only',
  },
};
