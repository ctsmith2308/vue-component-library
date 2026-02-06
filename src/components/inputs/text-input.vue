<script setup lang="ts">
interface TextProps {
  placeholder?: string;
}

const props = withDefaults(defineProps<TextProps>(), {
  placeholder: 'Start typing...',
});

console.log(props);
</script>

<template>
  <input class="input-base border-base hocus-base" type="text" :placeholder="placeholder" />
</template>
