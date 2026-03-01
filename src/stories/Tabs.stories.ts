import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Tabs, TabList, Tab, TabPanel } from '@/blocks';

const meta = {
  title: 'Layout/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanel },
    setup() { return { args }; },
    template: `
      <Tabs value="overview">
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="settings">Settings</Tab>
          <Tab value="billing">Billing</Tab>
        </TabList>
        <TabPanel value="overview">
          <p class="text-sm">Overview tab content. Describe the project or feature at a high level here.</p>
        </TabPanel>
        <TabPanel value="settings">
          <p class="text-sm">Settings tab content. Put configuration options or preference controls here.</p>
        </TabPanel>
        <TabPanel value="billing">
          <p class="text-sm">Billing tab content. Subscription plan details and payment info go here.</p>
        </TabPanel>
      </Tabs>
    `,
  }),
};

export const WithDisabledTab: Story = {
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanel },
    setup() { return { args }; },
    template: `
      <Tabs value="overview">
        <TabList>
          <Tab value="overview">Overview</Tab>
          <Tab value="settings">Settings</Tab>
          <Tab value="billing" :disabled="true">Billing</Tab>
        </TabList>
        <TabPanel value="overview">
          <p class="text-sm">Overview content.</p>
        </TabPanel>
        <TabPanel value="settings">
          <p class="text-sm">Settings content.</p>
        </TabPanel>
        <TabPanel value="billing">
          <p class="text-sm">Billing content.</p>
        </TabPanel>
      </Tabs>
    `,
  }),
};

export const RichContent: Story = {
  render: (args) => ({
    components: { Tabs, TabList, Tab, TabPanel },
    setup() { return { args }; },
    template: `
      <Tabs value="stats">
        <TabList>
          <Tab value="stats">Stats</Tab>
          <Tab value="team">Team</Tab>
          <Tab value="notes">Notes</Tab>
        </TabList>
        <TabPanel value="stats">
          <div class="grid grid-cols-3 gap-3 text-center text-sm">
            <div class="p-3 bg-surface-alt rounded"><div class="font-bold text-xl">26</div>Components</div>
            <div class="p-3 bg-surface-alt rounded"><div class="font-bold text-xl">100%</div>TypeScript</div>
            <div class="p-3 bg-surface-alt rounded"><div class="font-bold text-xl">v4</div>Tailwind</div>
          </div>
        </TabPanel>
        <TabPanel value="team">
          <ul class="text-sm space-y-2 list-none p-0">
            <li class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">JD</span>
              Jane Doe — Engineering Lead
            </li>
            <li class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">JS</span>
              John Smith — Design Lead
            </li>
          </ul>
        </TabPanel>
        <TabPanel value="notes">
          <p class="text-sm text-gray-500 italic">No notes yet. Rich content like forms, tables, or nested components can go inside any TabPanel.</p>
        </TabPanel>
      </Tabs>
    `,
  }),
};
