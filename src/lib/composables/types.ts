import type { Component } from 'vue';

interface ExampleSection {
  id: string;
  label: string;
  component: Component;
}

interface ScrollToSectionOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  updateUrl?: boolean;
  offset?: number; // For fixed headers
}

export type { ExampleSection, ScrollToSectionOptions };
