import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { DataTable } from '@/blocks';

const meta = {
  title: 'Data/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    rows: { control: 'number' },
    hoverable: { control: 'boolean' },
    loading: { control: 'boolean' },
    paginated: { control: 'boolean' },
    emptyMessage: { control: 'text' },
  },
} satisfies Meta<typeof DataTable>;

export default meta;

const columns = [
  { field: 'name', header: 'Name' },
  { field: 'role', header: 'Role' },
  { field: 'department', header: 'Department' },
  { field: 'status', header: 'Status' },
];

const sortableColumns = [
  { field: 'name', header: 'Name', sortable: true },
  { field: 'role', header: 'Role', sortable: true },
  { field: 'department', header: 'Department', sortable: true },
  { field: 'status', header: 'Status' },
];

const data = [
  { name: 'Alice Johnson', role: 'Engineer', department: 'Product', status: 'Active' },
  { name: 'Bob Smith', role: 'Designer', department: 'Design', status: 'Active' },
  { name: 'Carol White', role: 'Manager', department: 'Product', status: 'On Leave' },
  { name: 'David Brown', role: 'Engineer', department: 'Platform', status: 'Active' },
  { name: 'Eve Davis', role: 'Analyst', department: 'Data', status: 'Active' },
  { name: 'Frank Miller', role: 'Engineer', department: 'Platform', status: 'Inactive' },
  { name: 'Grace Wilson', role: 'Designer', department: 'Design', status: 'Active' },
  { name: 'Henry Moore', role: 'Manager', department: 'Data', status: 'Active' },
  { name: 'Iris Taylor', role: 'Engineer', department: 'Product', status: 'Active' },
  { name: 'Jack Anderson', role: 'Analyst', department: 'Data', status: 'On Leave' },
  { name: 'Karen Thomas', role: 'Engineer', department: 'Platform', status: 'Active' },
  { name: 'Leo Jackson', role: 'Designer', department: 'Design', status: 'Inactive' },
  { name: 'Mia Harris', role: 'Manager', department: 'Product', status: 'Active' },
  { name: 'Nathan Martin', role: 'Engineer', department: 'Platform', status: 'Active' },
  { name: 'Olivia Garcia', role: 'Analyst', department: 'Data', status: 'Active' },
];

export const Default: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, columns, data };
    },
    template: `<DataTable v-bind="args" :columns="columns" :data="data" />`,
  }),
};

export const Sortable: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, sortableColumns, data };
    },
    template: `<DataTable v-bind="args" :columns="sortableColumns" :data="data" />`,
  }),
};

export const Loading: StoryObj<typeof meta> = {
  args: { loading: true },
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, columns, data };
    },
    template: `<DataTable v-bind="args" :columns="columns" :data="data" />`,
  }),
};

export const Empty: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, columns };
    },
    template: `<DataTable v-bind="args" :columns="columns" :data="[]" empty-message="No records found." />`,
  }),
};

export const Paginated: StoryObj<typeof meta> = {
  args: { paginated: true, rows: 5 },
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, sortableColumns, data };
    },
    template: `<DataTable v-bind="args" :columns="sortableColumns" :data="data" />`,
  }),
};

export const NonHoverable: StoryObj<typeof meta> = {
  args: { hoverable: false },
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, columns, data };
    },
    template: `<DataTable v-bind="args" :columns="columns" :data="data" />`,
  }),
};

export const CustomEmpty: StoryObj<typeof meta> = {
  render: (args) => ({
    components: { DataTable },
    setup() {
      return { args, columns };
    },
    template: `
      <DataTable v-bind="args" :columns="columns" :data="[]">
        <template #empty>
          <div class="flex flex-col items-center gap-2 py-4">
            <span class="text-content-text font-medium">No team members yet</span>
            <span class="text-sm text-content-text-secondary">Add someone to get started.</span>
          </div>
        </template>
      </DataTable>
    `,
  }),
};
