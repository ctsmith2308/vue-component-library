<script setup lang="ts">
import { ref, nextTick, onUnmounted } from 'vue';
import type { Placement, PlacementResult, PlacementCandidate } from './types';
import Button from '../button/Button.vue';

interface PopoverProps {
  dismissable?: boolean;
  showCloseIcon?: boolean;
}

const props = withDefaults(defineProps<PopoverProps>(), {
  dismissable: true,
  showCloseIcon: false,
});

const emit = defineEmits<{
  show: [];
  hide: [];
}>();

const ARROW_SIZE = 8;
const GAP = ARROW_SIZE + 4;

const visible = ref<boolean>(false);
const popEl = ref<HTMLElement | null>(null);
const trigger = ref<HTMLElement | null>(null);
const coords = ref<PlacementResult>({ top: 0, left: 0, arrow: 'top', placement: 'bottom' });
const arrowOff = ref<number>(0);

function calcPosition(tRect: DOMRect, pRect: DOMRect): PlacementResult {
  const vw = window.innerWidth;

  const vh = window.innerHeight;

  const placements: Record<Placement, PlacementCandidate> = {
    bottom: { top: tRect.bottom + GAP, left: tRect.left + tRect.width / 2 - pRect.width / 2, arrow: 'top' },
    top: { top: tRect.top - pRect.height - GAP, left: tRect.left + tRect.width / 2 - pRect.width / 2, arrow: 'bottom' },
    right: { top: tRect.top + tRect.height / 2 - pRect.height / 2, left: tRect.right + GAP, arrow: 'left' },
    left: { top: tRect.top + tRect.height / 2 - pRect.height / 2, left: tRect.left - pRect.width - GAP, arrow: 'right' },
  };

  const order: Placement[] = ['bottom', 'top', 'right', 'left'];

  for (const placement of order) {
    const p = placements[placement];

    const fitsV = p.top >= 0 && p.top + pRect.height <= vh;

    const fitsH = p.left >= 0 && p.left + pRect.width <= vw;

    if (fitsV && fitsH) return { ...p, placement };
  }

  // Fallback: bottom, clamped to viewport
  const fallback = placements.bottom;
  return {
    top: Math.min(Math.max(fallback.top, 8), vh - pRect.height - 8),

    left: Math.min(Math.max(fallback.left, 8), vw - pRect.width - 8),

    arrow: 'top',

    placement: 'bottom',
  };
}

function reposition(): void {
  if (!trigger.value || !popEl.value) return;

  const tRect = trigger.value.getBoundingClientRect();

  const pRect = popEl.value.getBoundingClientRect();

  const pos = calcPosition(tRect, pRect);

  arrowOff.value =
    pos.arrow === 'top' || pos.arrow === 'bottom'
      ? tRect.left + tRect.width / 2 - pos.left
      : tRect.top + tRect.height / 2 - pos.top;

  coords.value = pos;
}

function onOutsideClick(event: MouseEvent): void {
  const target = event.target as Node;

  if (popEl.value?.contains(target)) return;
  if (trigger.value?.contains(target)) return;

  hide();
}

function attachListeners(): void {
  window.addEventListener('resize', reposition);
  window.addEventListener('scroll', reposition, true);

  if (props.dismissable) document.addEventListener('mousedown', onOutsideClick);
}

function detachListeners(): void {
  window.removeEventListener('resize', reposition);
  window.removeEventListener('scroll', reposition, true);
  document.removeEventListener('mousedown', onOutsideClick);
}

function show(event: MouseEvent): void {
  trigger.value = (event.currentTarget ?? event.target) as HTMLElement;

  visible.value = true;

  emit('show');

  nextTick(() => {
    reposition();
    attachListeners();
  });
}

function hide(): void {
  visible.value = false;
  emit('hide');
  detachListeners();
}

function toggle(event: MouseEvent): void {
  if (visible.value) {
    hide();
  } else {
    show(event);
  }
}

onUnmounted(detachListeners);

defineExpose({ show, hide, toggle });

function arrowInlineStyle(): Record<string, string> {
  const isVertical = coords.value.arrow === 'top' || coords.value.arrow === 'bottom';

  return isVertical
    ? { left: `${arrowOff.value}px`, transform: 'translateX(-50%)' }
    : { top: `${arrowOff.value}px`, transform: 'translateY(-50%)' };
}

function rootInlineStyle(): Record<string, string> {
  return { top: `${coords.value.top}px`, left: `${coords.value.left}px` };
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-[opacity,transform] duration-150 ease-[cubic-bezier(0.16,1,0.3,1)]"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-[opacity,transform] duration-100 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-1"
    >
      <div
        v-if="visible"
        ref="popEl"
        :style="rootInlineStyle()"
        class="fixed z-[9999] min-w-[200px] max-w-[360px] bg-[var(--color-surface)] border border-[var(--color-surface-border)] rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.08),0_10px_30px_-5px_rgb(0_0_0/0.12)]"
        role="dialog"
      >
        <!-- Arrow -->
        <span
          class="absolute size-4 pointer-events-none"
          :class="{
            '-top-4': coords.arrow === 'top',
            '-bottom-4': coords.arrow === 'bottom',
            '-left-4': coords.arrow === 'left',
            '-right-4': coords.arrow === 'right',
          }"
          :style="arrowInlineStyle()"
        >
          <!-- Border layer -->
          <span
            class="absolute border-8 border-transparent"
            :class="{
              'border-b-[var(--color-surface-border)] top-0 left-0': coords.arrow === 'top',
              'border-t-[var(--color-surface-border)] top-0 left-0': coords.arrow === 'bottom',
              'border-r-[var(--color-surface-border)] top-0 left-0': coords.arrow === 'left',
              'border-l-[var(--color-surface-border)] top-0 left-0': coords.arrow === 'right',
            }"
          />
          <!-- Fill layer (offsets 2px to sit inside border) -->
          <span
            class="absolute border-8 border-transparent"
            :class="{
              'border-b-[var(--color-surface)] top-[2px] left-0': coords.arrow === 'top',
              'border-t-[var(--color-surface)] bottom-[2px] left-0': coords.arrow === 'bottom',
              'border-r-[var(--color-surface)] top-0 left-[2px]': coords.arrow === 'left',
              'border-l-[var(--color-surface)] top-0 right-[2px]': coords.arrow === 'right',
            }"
          />
        </span>

        <!-- Close button -->
        <Button v-if="showCloseIcon" class="absolute top-1.5 right-2" aria-label="Close" @click="hide"> &times; </Button>

        <!-- Content -->
        <div class="px-4 py-3 text-[0.875rem] leading-relaxed text-[var(--color-content-text)]">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
