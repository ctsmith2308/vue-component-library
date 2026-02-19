<script setup lang="ts">
import { computed } from 'vue';

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
} from '@heroicons/vue/24/outline';

import GithubIcon from './GithubIcon.vue';

const iconComponentKeys = {
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
} as const;

type IconSize = 'sm' | 'md' | 'lg' | 'xl';

interface IconProps {
  iconType: keyof typeof iconComponentKeys;
  size?: IconSize;
}

const props = withDefaults(defineProps<IconProps>(), {
  size: 'md',
});

const sizeKeys: Record<IconSize, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
};

const iconComponent = computed(() => iconComponentKeys[props.iconType]);

const sizeClass = computed(() => sizeKeys[props.size]);
</script>

<template>
  <component :is="iconComponent" :class="['shrink-0 ', sizeClass]" />
</template>
