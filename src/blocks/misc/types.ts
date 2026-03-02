interface ToggleSwitchProps {
  modelValue: boolean;
  label?: string;
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg';
  labelPosition?: 'left' | 'right';
}

interface TagProps {
  value: string;
  severity?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  rounded?: boolean;
  icon?: boolean;
}

interface ChipProps {
  label: string;
  removable?: boolean;
  icon?: boolean;
  image?: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

interface AvatarProps {
  image?: string;
  label?: string;
  icon?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'circle' | 'square';
}

export type { ToggleSwitchProps, TagProps, ChipProps, AvatarProps };
