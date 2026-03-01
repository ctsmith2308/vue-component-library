<script setup lang="ts">
import { inject } from 'vue';

const panel = inject<{
  isOpen: () => boolean;
}>('accordionPanel');

/** https://vuejs.org/guide/built-ins/transition.html#javascript-hooks */
const onEnter = (el: Element) => {
  (el as HTMLElement).style.height = 'auto';

  const height = (el as HTMLElement).offsetHeight;

  (el as HTMLElement).style.height = '0px';

  setTimeout(() => {
    (el as HTMLElement).style.height = height + 'px';
  });
};

const onAfterEnter = (el: Element) => {
  (el as HTMLElement).style.height = 'auto';
};

const onLeave = (el: Element) => {
  (el as HTMLElement).style.height = (el as HTMLElement).offsetHeight + 'px';

  setTimeout(() => {
    (el as HTMLElement).style.height = '0px';
  });
};
</script>

<template>
  <Transition name="accordion" @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave">
    <div v-if="panel?.isOpen()" class="accordion-content overflow-hidden">
      <div class="accordion-body">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.accordion-content {
  transition: height 0.2s ease-in-out;
}
</style>
