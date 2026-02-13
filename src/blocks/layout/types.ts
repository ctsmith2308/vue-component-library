import type { Component } from 'vue';

interface AccordionTab {
  header: string;
  content?: string;
  disabled?: boolean;
}

interface Tab {
  header: string;
  compontent: Component;
  disabled?: boolean;
  icon?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  activeIndex: number;
}

export type { Tab, AccordionTab, TabsProps };
