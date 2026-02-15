// TODO:

// Create showcase section for each button example
// Export to public Api
// Modules -> component-docs - ui -> button examples -> public api .vue file
// Create showcase "parent" page to wrap examples that is tabbed.
// First tab will have examples with side nav, second tab will have api
// Parent should organize by slot for components, then right side slot for sub nav
// Update docs config to reference public api
// Update class references to use tailwind utils
// Create 404 page
export * from './types';

export { default as DocNav } from './DocNav.vue';
export { default as ComponentDocPage } from './ComponentDocPage.vue';
export { default as DocLayout } from './DocLayout.vue';
export { default as ExamplesPanel } from './ExamplePanel.vue';
export { default as ExampleSection } from './ExampleSection.vue';
export { default as ApiPanel } from './ApiPanel.vue';
// export { default as DocPanelQuickNav } from './DocPanelQuickNav.vue';
