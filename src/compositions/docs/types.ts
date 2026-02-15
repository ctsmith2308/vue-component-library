import type { Component } from 'vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

interface PropsTableData {
  name: string;
  type: string;
  default: string;
  description: string;
}

interface SlotsTableData {
  name: string;
  description: string;
}

interface ApiSection<T> {
  id: string;
  label: string;
  data: T[];
  columns: Array<{ field: string; header: string }>;
}

export type { DocSection, ApiSection, PropsTableData, SlotsTableData };
