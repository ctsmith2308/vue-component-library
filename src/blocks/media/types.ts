interface ImageProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  preview?: boolean;
  imageClass?: string;
  imageStyle?: string;
  fit?: 'cover' | 'contain' | 'fill';
}

export type { ImageProps };
