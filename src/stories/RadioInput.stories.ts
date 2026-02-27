import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { RadioInput } from '@/blocks';

const meta = {
  title: 'Form/RadioInput',
  component: RadioInput,
  tags: ['autodocs'],
  args: {
    name: 'color',
    input: { groupName: 'color', id: 'radio-red', value: 'red', label: 'Red' },
  },
} satisfies Meta<typeof RadioInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    rules: { required: true },
    input: { groupName: 'fruit', id: 'radio-apple', value: 'apple', label: 'Apple' },
  },
};

// Render a typical radio group (multiple RadioInput components sharing a name)
export const RadioGroup: Story = {
  render: () => ({
    components: { RadioInput },
    template: `
      <div class="flex flex-col gap-2">
        <RadioInput name="plan" :input="{ groupName: 'plan', id: 'plan-free', value: 'free', label: 'Free' }" />
        <RadioInput name="plan" :input="{ groupName: 'plan', id: 'plan-pro', value: 'pro', label: 'Pro' }" />
        <RadioInput name="plan" :input="{ groupName: 'plan', id: 'plan-enterprise', value: 'enterprise', label: 'Enterprise' }" />
      </div>
    `,
  }),
};
