<script setup lang="ts">
import { ref, computed, watch } from 'vue';

import Button from '../button/Button.vue';
import Icon from '../icon/Icon.vue';

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

  for (let i = 0; i < blanks; i++) {
    days.push(null);
  }

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

  const date = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth(), day);

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

  const newDate = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth(), day);

  selectedDate.value = newDate;
  emit('update:modelValue', newDate);
  showCalendar.value = false;
};

const previousMonth = () => {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() - 1, 1);
};

const nextMonth = () => {
  currentMonth.value = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth() + 1, 1);
};

const toggleCalendar = () => {
  if (!props.disabled) {
    showCalendar.value = !showCalendar.value;
  }
};

watch(
  () => props.modelValue,
  (newVal) => {
    selectedDate.value = newVal || null;
    if (newVal) {
      currentMonth.value = new Date(newVal);
    }
  },
);
</script>

<template>
  <div class="relative w-full">
    <!-- Trigger button — ghost style, full width, custom layout -->
    <button
      type="button"
      :class="[
        'w-full inline-flex items-center justify-between px-3 gap-3 h-8 rounded-md transition-colors',
        'bg-transparent border border-input-border hover:border-brand text-content-text',
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
      ]"
      @click="toggleCalendar"
      :disabled="disabled"
    >
      <span :class="!selectedDate ? 'text-content-text-secondary' : 'text-content-text'">
        {{ formattedDate || placeholder }}
      </span>

      <Icon iconType="CalendarDaysIcon" class="text-content-text-secondary" />
    </button>

    <!-- Calendar dropdown -->
    <div
      v-if="showCalendar"
      class="absolute top-full left-0 mt-2 bg-surface border border-input-border rounded-lg shadow-lg z-50 p-4 w-full sm:w-80"
    >
      <!-- Month navigation -->
      <div class="flex items-center justify-between mb-4">
        <Button variant="ghost" size="sm" rounded @click="previousMonth">
          <template #icon>
            <Icon iconType="ChevronLeftIcon" />
          </template>
        </Button>

        <span class="font-semibold text-sm text-content-text">{{ monthName }}</span>

        <Button variant="ghost" size="sm" rounded @click="nextMonth">
          <template #icon>
            <Icon iconType="ChevronRightIcon" />
          </template>
        </Button>
      </div>

      <!-- Day headers -->
      <div class="grid grid-cols-7 gap-1 mb-2">
        <div
          v-for="day in ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']"
          :key="day"
          class="text-center text-xs font-semibold text-content-text-secondary py-1"
        >
          {{ day }}
        </div>
      </div>

      <!-- Calendar days -->
      <div class="grid grid-cols-7 gap-1">
        <button
          v-for="(day, index) in calendarDays"
          :key="index"
          type="button"
          :class="[
            'aspect-square flex items-center justify-center text-sm rounded transition-colors',
            {
              invisible: !day,
              'hover:bg-brand-ghost-hover cursor-pointer text-content-text': day && !isDateDisabled(day),
              'bg-brand text-white': isSelected(day),
              'border border-brand text-brand': isToday(day) && !isSelected(day),
              'text-disabled-text opacity-50 cursor-not-allowed': isDateDisabled(day) && !!day,
            },
          ]"
          @click="selectDate(day)"
          :disabled="isDateDisabled(day)"
        >
          {{ day }}
        </button>
      </div>
    </div>

    <!-- Overlay to close calendar -->
    <div v-if="showCalendar" class="fixed inset-0 z-40" @click="showCalendar = false"></div>
  </div>
</template>
