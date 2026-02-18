<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface DatePickerProps {
  modelValue?: Date | null;
  placeholder?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

const props = withDefaults(defineProps<DatePickerProps>(), {
  placeholder: 'Select date',
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [date: Date | null];
}>();

const showCalendar = ref(false);
const currentMonth = ref(new Date());
const selectedDate = ref<Date | null>(props.modelValue || null);

const daysInMonth = computed(() => {
  const year = currentMonth.value.getFullYear();
  const month = currentMonth.value.getMonth();
  return new Date(year, month + 1, 0).getDate();
});

const firstDayOfMonth = computed(() => {
  const year = currentMonth.value.getFullYear();
  const month = currentMonth.value.getMonth();
  return new Date(year, month, 1).getDay();
});

const monthName = computed(() => {
  return currentMonth.value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
});

const calendarDays = computed(() => {
  const days = [];
  const blanks = firstDayOfMonth.value;
  
  // Add blank days for alignment
  for (let i = 0; i < blanks; i++) {
    days.push(null);
  }
  
  // Add actual days
  for (let i = 1; i <= daysInMonth.value; i++) {
    days.push(i);
  }
  
  return days;
});

const formattedDate = computed(() => {
  if (!selectedDate.value) return '';
  return selectedDate.value.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
});

const isDateDisabled = (day: number | null) => {
  if (!day) return true;
  
  const date = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth(),
    day
  );
  
  if (props.minDate && date < props.minDate) return true;
  if (props.maxDate && date > props.maxDate) return true;
  
  return false;
};

const isSelected = (day: number | null) => {
  if (!day || !selectedDate.value) return false;
  
  return (
    day === selectedDate.value.getDate() &&
    currentMonth.value.getMonth() === selectedDate.value.getMonth() &&
    currentMonth.value.getFullYear() === selectedDate.value.getFullYear()
  );
};

const isToday = (day: number | null) => {
  if (!day) return false;
  
  const today = new Date();
  return (
    day === today.getDate() &&
    currentMonth.value.getMonth() === today.getMonth() &&
    currentMonth.value.getFullYear() === today.getFullYear()
  );
};

const selectDate = (day: number | null) => {
  if (!day || isDateDisabled(day)) return;
  
  const newDate = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth(),
    day
  );
  
  selectedDate.value = newDate;
  emit('update:modelValue', newDate);
  showCalendar.value = false;
};

const previousMonth = () => {
  currentMonth.value = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth() - 1,
    1
  );
};

const nextMonth = () => {
  currentMonth.value = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth() + 1,
    1
  );
};

const toggleCalendar = () => {
  if (!props.disabled) {
    showCalendar.value = !showCalendar.value;
  }
};

watch(() => props.modelValue, (newVal) => {
  selectedDate.value = newVal || null;
  if (newVal) {
    currentMonth.value = new Date(newVal);
  }
});
</script>

<template>
  <div class="datepicker relative w-full">
    <button
      type="button"
      :class="[
        'input-base border-base hocus-base w-full text-left flex items-center justify-between',
        { 'opacity-50 cursor-not-allowed': disabled }
      ]"
      @click="toggleCalendar"
      :disabled="disabled"
    >
      <span :class="{ 'text-content-text-secondary': !selectedDate }">
        {{ formattedDate || placeholder }}
      </span>
      <slot name="calendar-icon">
        <svg class="w-5 h-5 text-content-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </slot>
    </button>

    <!-- Calendar Dropdown -->
    <div
      v-if="showCalendar"
      class="absolute top-full left-0 mt-2 bg-surface border border-surface-border rounded-lg shadow-lg z-50 p-4 w-full sm:w-80"
    >
      <!-- Month Navigation -->
      <div class="flex items-center justify-between mb-4">
        <button
          type="button"
          class="p-1 hover:bg-surface-alt rounded"
          @click="previousMonth"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
        
        <span class="font-semibold text-sm">{{ monthName }}</span>
        
        <button
          type="button"
          class="p-1 hover:bg-surface-alt rounded"
          @click="nextMonth"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- Day Headers -->
      <div class="grid grid-cols-7 gap-1 mb-2">
        <div
          v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']"
          :key="day"
          class="text-center text-xs font-semibold text-content-text-secondary py-1"
        >
          {{ day }}
        </div>
      </div>

      <!-- Calendar Days -->
      <div class="grid grid-cols-7 gap-1">
        <button
          v-for="(day, index) in calendarDays"
          :key="index"
          type="button"
          :class="[
            'aspect-square flex items-center justify-center text-sm rounded transition-colors',
            {
              'text-content-text-secondary': !day,
              'hover:bg-brand-lighter cursor-pointer': day && !isDateDisabled(day),
              'bg-brand text-white': isSelected(day),
              'border border-brand': isToday(day) && !isSelected(day),
              'opacity-50 cursor-not-allowed': isDateDisabled(day),
            }
          ]"
          @click="selectDate(day)"
          :disabled="isDateDisabled(day)"
        >
          {{ day }}
        </button>
      </div>
    </div>

    <!-- Overlay to close calendar -->
    <div
      v-if="showCalendar"
      class="fixed inset-0 z-40"
      @click="showCalendar = false"
    ></div>
  </div>
</template>
