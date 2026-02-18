import type { Component } from 'vue';

interface AccordionTab {
  header: string;
  content?: string;
  disabled?: boolean;
}

interface Tab {
  header: string;
  component: Component;
  disabled?: boolean;
  icon?: boolean;
  props?: Record<string, unknown>;
}

interface TabsProps {
  tabs: Tab[];
  activeIndex: number;
}

interface ListItem<T = unknown> {
  label: string;
  value: T;
  active?: boolean;
  children?: ListItem<T>[];
}

export type { Tab, AccordionTab, TabsProps, ListItem };
