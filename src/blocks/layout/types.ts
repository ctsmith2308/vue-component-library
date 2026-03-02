interface AccordionTab {
  header: string;
  content?: string;
  disabled?: boolean;
}

interface AccordionProps {
  value?: string | string[];
  multiple?: boolean;
}

interface AccordionPanelProps {
  value: string;
  disabled?: boolean;
}

interface TabProps {
  value: string;
  disabled?: boolean;
}

type TabPanelProps = Pick<TabProps, 'value'>;

interface ListItem<T = unknown> {
  label: string;
  value: T;
  active?: boolean;
  children?: ListItem<T>[];
}

interface ListProps<T> {
  items: ListItem<T>[];
}

interface ListItemProps {
  clickable?: boolean;
}

interface CarouselProps {
  value: unknown[];
  numVisible?: number;
  numScroll?: number;
  circular?: boolean;
  autoplayInterval?: number;
  showIndicators?: boolean;
  showNavigators?: boolean;
}

export type {
  AccordionProps,
  AccordionTab,
  AccordionPanelProps,
  TabProps,
  TabPanelProps,
  ListProps,
  ListItemProps,
  ListItem,
  CarouselProps,
};
