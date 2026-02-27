import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { ToggleSwitch } from '@/blocks';

const meta = {
  title: 'Misc/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    labelPosition: { control: 'select', options: ['left', 'right'] },
  },
  args: {
    modelValue: false,
    label: 'Enable notifications',
    disabled: false,
    size: 'md',
    labelPosition: 'right',
  },
} satisfies Meta<typeof ToggleSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const On: Story = {
  args: { modelValue: true },
};

export const NoLabel: Story = {
  args: { label: undefined },
};

export const LabelLeft: Story = {
  args: { label: 'Dark mode', labelPosition: 'left', modelValue: true },
};

export const Small: Story = {
  args: { size: 'sm', label: 'Small toggle' },
};

export const Large: Story = {
  args: { size: 'lg', label: 'Large toggle' },
};

export const Disabled: Story = {
  args: { disabled: true, label: 'Disabled (off)' },
};

export const DisabledOn: Story = {
  args: { disabled: true, modelValue: true, label: 'Disabled (on)' },
};
