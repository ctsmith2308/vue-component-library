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

type Color = 'blue' | 'green' | 'yellow' | 'orange' | 'fuchsia';
type TailwindClass = 'bg-blue-500' | 'bg-orange-500' | 'bg-green-500' | 'bg-yellow-500' | 'bg-fuchsia-500';

interface ColorPalette {
  tailwindClass: TailwindClass;
  color: Color;
}

export type { ExampleSection, ScrollToSectionOptions, ColorPalette, Color };
