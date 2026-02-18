import type { MaskType } from '../types';

const maskPatterns: Record<MaskType, RegExp> = {
  phone: /[^0-9-]/g,
  numeric: /[^0-9]/g,
  alpha: /[^a-zA-Z]/g,
  alpha_num: /[^a-zA-Z0-9]/g,
  alpha_dash: /[^a-zA-Z_-]/g,
};

function applyMask(value: string, mask: MaskType): string {
  return value.replace(maskPatterns[mask], '');
}

export { type MaskType, applyMask };
