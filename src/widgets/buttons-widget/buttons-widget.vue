<script setup lang="ts">
import { ref } from 'vue'
import VCodeBlock from '@wdns/vue-code-block'
import ButtonDefault from './button-default.vue'
import ButtonColors from './button-colors.vue'
import ButtonOutlined from './button-outlined.vue'
import ButtonRaised from './button-raised.vue'
import ButtonSizes from './button-sizes.vue'
import ButtonText from './button-text.vue'

const codeSnippet = ref(
  ` interface ButtonProps {
    label: string
    color?: ButtonColor
    size?: ButtonSize
    variant?: ButtonVariant
    raised?: boolean
    rounded?: boolean
    icon?: string
    loading?: boolean
    disabled?: boolean
  }

  type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger'

  type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'jumbo'

  type ButtonVariant = 'outlined' | 'link' | 'text'
`,
)
</script>

<template>
  <v-code-block :code="codeSnippet" />

  <ButtonDefault />

  <ButtonColors />

  <ButtonOutlined />

  <ButtonRaised />

  <ButtonText />

  <ButtonSizes />
</template>
