<script setup lang="ts">
interface Props {
  clickable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  clickable: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event);
  }
};
</script>

<template>
  <li :class="{ clickable }" @click.stop="handleClick">
    <slot />
  </li>
</template>

<style scoped>
li.clickable {
  cursor: pointer;
}

li.clickable:hover {
  background-color: var(--surface-hover);
}
</style>
