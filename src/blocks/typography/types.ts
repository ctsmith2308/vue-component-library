interface HeadingProps {
  size: number;
}

interface TextProps {
  tag?: 'p' | 'div' | 'span' | 'label' | 'section' | 'article';
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'muted' | 'secondary' | 'danger' | 'brand';
}

export type { HeadingProps, TextProps };
