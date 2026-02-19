import { type Component } from 'vue';

import ApiReference from './ApiReference.vue';
import BasicExample from './BasicExample.vue';
import SizingExample from './SizingExample.vue';

interface DocSection {
  id: string;
  label: string;
  component: Component;
}

type IconType =
  | 'ChevronDoubleLeftIcon'
  | 'ChevronDoubleRightIcon'
  | 'ChevronDownIcon'
  | 'ChevronLeftIcon'
  | 'ChevronRightIcon'
  | 'SunIcon'
  | 'MoonIcon'
  | 'Bars3Icon'
  | 'ArrowLongUpIcon'
  | 'ArrowLongDownIcon'
  | 'GithubIcon'
  | 'LinkIcon'
  | 'CheckIcon'
  | 'CalendarDaysIcon';

interface IconProps {
  iconType: IconType;
}

const apiReferenceConfig = {
  data: [
    {
      name: 'iconType',
      type: Object.keys({
        ChevronDoubleLeftIcon: 1,
        ChevronDoubleRightIcon: 1,
        ChevronDownIcon: 1,
        ChevronLeftIcon: 1,
        ChevronRightIcon: 1,
        SunIcon: 1,
        MoonIcon: 1,
        Bars3Icon: 1,
        ArrowLongUpIcon: 1,
        ArrowLongDownIcon: 1,
        GithubIcon: 1,
        LinkIcon: 1,
        CheckIcon: 1,
        CalendarDaysIcon: 1,
      } satisfies Record<IconType, number>)
        .map((k) => `'${k}'`)
        .join(' | '),
      default: 'undefined',
      description: 'Key identifying which icon to render. Each value maps to a Heroicons (24/outline) or custom SVG component.',
    },
  ] satisfies Array<{
    name: keyof IconProps | string;
    type: string;
    default: string;
    description: string;
  }>,
  columns: [
    { field: 'name', header: 'Name' },
    { field: 'type', header: 'Type' },
    { field: 'default', header: 'Default' },
    { field: 'description', header: 'Description' },
  ],
};

const iconSectionConfig: DocSection[] = [
  { id: 'icon-api', label: 'API Reference', component: ApiReference },
  { id: 'icon-all', label: 'All Icons', component: BasicExample },
  { id: 'icon-sizing', label: 'Sizing', component: SizingExample },
];

export { apiReferenceConfig, iconSectionConfig };
