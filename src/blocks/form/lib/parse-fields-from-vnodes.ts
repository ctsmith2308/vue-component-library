import type { VNode } from 'vue';
import type { ValidationRule, FormField } from '../types';

function parseFieldsFromVNodes(vnodes: VNode[]): Map<string, FormField> {
  const fields = new Map<string, FormField>();

  const traverse = (nodes: VNode[]) => {
    nodes.forEach((vnode) => {
      if (vnode.props && 'name' in vnode.props) {
        const name = vnode.props.name as string;
        const rules = vnode.props.rules as ValidationRule | undefined;

        if (name && rules) {
          fields.set(name, {
            value: vnode.props.modelValue ?? '',
            rules,
            error: undefined,
            touched: false,
          });
        }
      }

      if (vnode.children && Array.isArray(vnode.children)) {
        traverse(vnode.children as VNode[]);
      }
    });
  };

  traverse(vnodes);

  return fields;
}

export { parseFieldsFromVNodes };
