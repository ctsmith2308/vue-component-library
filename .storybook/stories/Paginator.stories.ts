import type { Meta, StoryObj } from '@storybook/vue3-vite';

import { Paginator } from '@/blocks';

const meta = {
  title: 'Data/Paginator',
  component: Paginator,
  tags: ['autodocs'],
  argTypes: {
    totalRecords: { control: 'number' },
    rows: { control: 'number' },
    first: { control: 'number' },
    pageLinkSize: { control: 'number' },
  },
} satisfies Meta<typeof Paginator>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    totalRecords: 100,
    rows: 10,
    first: 0,
  },
};

export const MiddlePage: StoryObj<typeof meta> = {
  args: {
    totalRecords: 100,
    rows: 10,
    first: 40,
  },
};

export const LastPage: StoryObj<typeof meta> = {
  args: {
    totalRecords: 100,
    rows: 10,
    first: 90,
  },
};

export const SmallPageSize: StoryObj<typeof meta> = {
  args: {
    totalRecords: 100,
    rows: 5,
    first: 0,
  },
};

export const LargeDataset: StoryObj<typeof meta> = {
  args: {
    totalRecords: 1000,
    rows: 10,
    first: 490,
    pageLinkSize: 7,
  },
};

export const FewRecords: StoryObj<typeof meta> = {
  args: {
    totalRecords: 25,
    rows: 10,
    first: 0,
  },
};
