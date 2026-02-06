import { ref, markRaw, type Component } from 'vue'

import { MenuBarWidget } from '@/widgets'
import { ButtonsWidget } from '@/widgets'

interface ComponentDocument {
  label: string
  component: Component
}

const useDocumentDisplay = () => {
  const componentDocuments: ComponentDocument[] = [
    { label: 'Button', component: markRaw(ButtonsWidget) },
    { label: 'Menu', component: markRaw(MenuBarWidget) },
  ]

  const currentDocument = ref<ComponentDocument>(componentDocuments[0]!)

  const setDocumentDisplay = (componentDocument: ComponentDocument) => {
    currentDocument.value = {
      label: componentDocument.label,
      component: markRaw(componentDocument.component),
    }
  }

  return {
    componentDocuments,
    currentDocument,
    setDocumentDisplay,
  }
}

export { useDocumentDisplay }
