import type { VNode } from 'vue';
import type { ParsedField } from './types';
import type { ValidationRule } from '@/shared/ui';

function parseFieldsFromVNodes(vnodes: VNode[]): ParsedField[] {
  const fields: ParsedField[] = [];

  const traverse = (nodes: VNode[]) => {
    nodes.forEach((vnode) => {
      // Check if vnode has props with name and rules
      if (vnode.props && 'name' in vnode.props) {
        const name = vnode.props.name as string;
        const rules = vnode.props.rules as ValidationRule | undefined;
        const label = vnode.props.label as string | undefined;
        const initialValue = vnode.props.modelValue as unknown;

        if (name && rules) {
          fields.push({ name, rules, label, initialValue });
        }
      }

      // Recursively parse children
      if (vnode.children && Array.isArray(vnode.children)) {
        traverse(vnode.children as VNode[]);
      }
    });
  };

  traverse(vnodes);

  return fields;
}

export { parseFieldsFromVNodes };
