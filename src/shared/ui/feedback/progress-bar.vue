<script setup lang="ts">
import { computed } from 'vue';

interface ProgressBarProps {
  value?: number;
  showValue?: boolean;
  mode?: 'determinate' | 'indeterminate';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  height?: string;
}

const props = withDefaults(defineProps<ProgressBarProps>(), {
  value: 0,
  showValue: false,
  mode: 'determinate',
  color: 'primary',
  height: '1rem',
});

const colorClasses = {
  primary: 'bg-brand',
  secondary: 'bg-brand-secondary',
  success: 'bg-success',
  danger: 'bg-danger',
};

const progressValue = computed(() => {
  return Math.min(Math.max(props.value, 0), 100);
});

const progressWidth = computed(() => `${progressValue.value}%`);
</script>

<template>
  <div class="progress-bar w-full">
    <div 
      class="progress-track bg-surface-alt rounded-full overflow-hidden relative"
      :style="{ height }"
      role="progressbar"
      :aria-valuenow="mode === 'determinate' ? progressValue : undefined"
      :aria-valuemin="0"
      :aria-valuemax="100"
    >
      <div
        v-if="mode === 'determinate'"
        :class="['progress-fill h-full transition-all duration-300 ease-out', colorClasses[color]]"
        :style="{ width: progressWidth }"
      ></div>
      
      <div
        v-else
        :class="['progress-indeterminate h-full', colorClasses[color]]"
      ></div>
    </div>
    
    <div v-if="showValue && mode === 'determinate'" class="text-center mt-2 text-sm text-content-text-secondary">
      {{ Math.round(progressValue) }}%
    </div>
  </div>
</template>

<style scoped>
.progress-indeterminate {
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  animation: progress-indeterminate 2s ease-in-out infinite;
}

@keyframes progress-indeterminate {
  0% {
    left: -30%;
  }
  100% {
    left: 100%;
  }
}
</style>
