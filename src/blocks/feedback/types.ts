interface ProgressBarProps {
  value?: number;
  showValue?: boolean;
  mode?: 'determinate' | 'indeterminate';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  height?: string;
}

interface ProgressSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  strokeWidth?: string;
  color?: 'primary' | 'secondary' | 'success' | 'danger';
}

interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  animation?: 'pulse' | 'wave' | 'none';
  shape?: 'rectangle' | 'circle' | 'square';
  size?: string;
}

export type { ProgressBarProps, ProgressSpinnerProps, SkeletonProps };
