<script setup lang="ts">
import { ref } from 'vue';
import { Form, Button } from '@/blocks';
import DatePicker from '@/blocks/select/DatePicker.vue';
import { DocumentExampleSection } from '@/compositions/document';
import { toHtmlHighlight } from '@/lib/utils';

const heading = 'Date Picker with Form';

const description = `Embed DatePicker inside a Form for submission with other fields.`;

const htmlString = toHtmlHighlight(description, 'Form');

const codeSnippet = `
  <Form @submit="onSubmit">
    <DatePicker v-model="appointmentDate" placeholder="Appointment date" />
    <Button type="submit" label="Book" />
  </Form>

`;

const appointmentDate = ref<Date | null>(null);

const onSubmit = (isValid: boolean): void => {
  console.log('Submitted, date:', appointmentDate.value, 'isValid:', isValid);
};
</script>

<template>
  <DocumentExampleSection :heading="heading" :description="htmlString" :code-snippet="codeSnippet">
    <Form @submit="onSubmit">
      <div class="flex flex-col gap-4 w-full max-w-xs">
        <DatePicker v-model="appointmentDate" placeholder="Appointment date" />
        <Button type="submit" label="Book Appointment" />
      </div>
    </Form>
  </DocumentExampleSection>
</template>
