import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { defineComponent, h } from 'vue';

import { Tabs } from '@/blocks';

// Simple placeholder components for tab content
const OverviewTab = defineComponent({ render: () => h('p', { class: 'text-sm' }, 'Overview content goes here.') });
const SettingsTab = defineComponent({ render: () => h('p', { class: 'text-sm' }, 'Settings panel content goes here.') });
const BillingTab = defineComponent({ render: () => h('p', { class: 'text-sm' }, 'Billing information goes here.') });

const meta = {
  title: 'Layout/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: {
    activeIndex: 0,
    tabs: [
      { header: 'Overview', component: OverviewTab },
      { header: 'Settings', component: SettingsTab },
      { header: 'Billing', component: BillingTab },
    ],
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SecondTabActive: Story = {
  args: { activeIndex: 1 },
};

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { header: 'Overview', component: OverviewTab },
      { header: 'Settings', component: SettingsTab },
      { header: 'Billing', component: BillingTab, disabled: true },
    ],
  },
};
