type HeadingSize = 1 | 2 | 3 | 4 | 5;

interface HeadingProps {
  size: HeadingSize;
}

interface TextProps {
  tag?: 'p' | 'div' | 'span' | 'label' | 'section' | 'article';
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'muted' | 'secondary' | 'danger' | 'brand';
}

export type { HeadingProps, TextProps, HeadingSize };
