import { ref, markRaw, type Component } from 'vue'

import { MenuBarWidget } from '@/documents'
import { ButtonDocument } from '@/documents'
import { InputDocument } from '@/documents'

interface ComponentDocument {
  label: string
  component: Component
}

const useDocumentDisplay = () => {
  const componentDocuments: ComponentDocument[] = [
    { label: 'Button', component: markRaw(ButtonDocument) },
    { label: 'Inputs', component: markRaw(InputDocument) },
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
