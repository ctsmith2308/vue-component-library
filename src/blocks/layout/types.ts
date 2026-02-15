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

export type { Tab, AccordionTab, TabsProps };
