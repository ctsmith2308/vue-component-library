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
} as const;

interface IconProps {
  iconType: keyof typeof iconComponentKeys;
}

const props = defineProps<IconProps>();

const iconComponent = computed(() => iconComponentKeys[props.iconType]);
</script>

<template>
  <component :is="iconComponent" class="w-full h-full" />
</template>
