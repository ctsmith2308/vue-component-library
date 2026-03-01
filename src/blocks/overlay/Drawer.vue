<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue';
import Button from '../button/Button.vue';
import Icon from '../icon/Icon.vue';
import PageOverlay from './PageOverlay.vue';
import type { DrawerProps } from './types';

const props = withDefaults(defineProps<DrawerProps>(), {
  position: 'left',
  size: 'md',
});

const emit = defineEmits(['close']);

const drawerEl = ref<HTMLElement | null>(null);
let previouslyFocused: HTMLElement | null = null;

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

function getFocusable(): HTMLElement[] {
  return drawerEl.value ? Array.from(drawerEl.value.querySelectorAll<HTMLElement>(FOCUSABLE)) : [];
}

function onKeydown(e: KeyboardEvent): void {
  if (e.key === 'Escape') {
    emit('close');
    return;
  }
  if (e.key !== 'Tab') return;

  const focusable = getFocusable();
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    }
  } else {
    if (document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
  }
}

watch(
  () => props.isOpen,
  async (open) => {
    if (open) {
      previouslyFocused = document.activeElement as HTMLElement;
      await nextTick();
      getFocusable()[0]?.focus();
    } else {
      previouslyFocused?.focus();
      previouslyFocused = null;
    }
  },
);

const onClose = () => emit('close');

const sizeMap: Record<string, string> = {
  sm: 'w-64',
  md: 'w-80',
  lg: 'w-96',
  full: 'w-full',
};

const verticalSizeMap: Record<string, string> = {
  sm: 'h-48',
  md: 'h-64',
  lg: 'h-80',
  full: 'h-full',
};

const drawerClasses = computed(() => {
  const base = 'fixed z-30 bg-page flex flex-col shadow-xl overflow-y-auto';

  const positionClasses: Record<string, string> = {
    left: `top-0 left-0 h-full ${sizeMap[props.size]}`,
    right: `top-0 right-0 h-full ${sizeMap[props.size]}`,
    top: `top-0 left-0 w-full ${verticalSizeMap[props.size]}`,
    bottom: `bottom-0 left-0 w-full ${verticalSizeMap[props.size]}`,
  };

  return [base, positionClasses[props.position]];
});

const transitionName = computed(() => `drawer-${props.position}`);
</script>

<template>
  <PageOverlay :is-open="props.isOpen" @close="onClose" />

  <Transition :name="transitionName">
    <div v-if="props.isOpen" ref="drawerEl" :class="drawerClasses" role="dialog" aria-modal="true" @keydown="onKeydown">
      <div class="flex items-center justify-between p-4 border-b border-surface-border shrink-0">
        <slot name="header" />

        <Button variant="ghost" size="md" class="btn-icon ml-auto" @click="onClose" aria-label="Close drawer">
          <template #icon>
            <Icon iconType="XMarkIcon" />
          </template>
        </Button>
      </div>

      <div class="flex-1 p-4 overflow-y-auto">
        <slot />
      </div>

      <div v-if="$slots.footer" class="shrink-0 p-4 border-t border-surface-border">
        <slot name="footer" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
/* Left */
.drawer-left-enter-active,
.drawer-left-leave-active {
  transition: transform 300ms ease-out;
}
.drawer-left-enter-from,
.drawer-left-leave-to {
  transform: translateX(-100%);
}

/* Right */
.drawer-right-enter-active,
.drawer-right-leave-active {
  transition: transform 300ms ease-out;
}
.drawer-right-enter-from,
.drawer-right-leave-to {
  transform: translateX(100%);
}

/* Top */
.drawer-top-enter-active,
.drawer-top-leave-active {
  transition: transform 300ms ease-out;
}
.drawer-top-enter-from,
.drawer-top-leave-to {
  transform: translateY(-100%);
}

/* Bottom */
.drawer-bottom-enter-active,
.drawer-bottom-leave-active {
  transition: transform 300ms ease-out;
}
.drawer-bottom-enter-from,
.drawer-bottom-leave-to {
  transform: translateY(100%);
}
</style>
