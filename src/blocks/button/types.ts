type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl' | 'jumbo';
type ButtonVariant = 'outlined' | 'link' | 'text' | 'ghost';

interface ButtonProps {
  label?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  raised?: boolean;
  rounded?: boolean;
  loading?: boolean;
  disabled?: boolean;
  as?: 'button' | 'a';
  href?: string;
  iconPosition?: 'left' | 'right';
}

interface SpinnerProps {
  size?: ButtonSize;
  animationDuration?: string;
}

export type { ButtonProps, ButtonColor, ButtonSize, ButtonVariant, SpinnerProps };
