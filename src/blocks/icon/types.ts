import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SunIcon,
  MoonIcon,
  Bars3Icon,
  ArrowLongUpIcon,
  ArrowLongDownIcon,
  LinkIcon,
  CheckIcon,
  CalendarDaysIcon,
  EyeIcon,
  EyeSlashIcon,
  PaintBrushIcon,
  SparklesIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

import GithubIcon from './GithubIcon.vue';

const ICON_COMPONENT_KEYS = {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SunIcon,
  MoonIcon,
  Bars3Icon,
  ArrowLongUpIcon,
  ArrowLongDownIcon,
  GithubIcon,
  LinkIcon,
  CheckIcon,
  CalendarDaysIcon,
  EyeIcon,
  EyeSlashIcon,
  PaintBrushIcon,
  SparklesIcon,
  XMarkIcon,
} as const;

type IconSize = 'sm' | 'md' | 'lg' | 'xl';

interface IconProps {
  iconType: keyof typeof ICON_COMPONENT_KEYS;
  size?: IconSize;
}

export type { IconProps, IconSize };

export { ICON_COMPONENT_KEYS };
