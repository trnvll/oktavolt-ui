'use client'

import {ComponentProps} from 'react';
import {cn} from '@/lib/utils';

export interface ImageProps extends ComponentProps<'img'> {}

export const Image = ({ src, alt, className }: ImageProps) => {
  const combinedClassNames = cn('object-cover object-center', className); // Default class names for image styling
  return <img src={src} alt={alt || ''} className={combinedClassNames} />;
};

export const image = (props: ImageProps) => {
  return <Image {...props} />;
};
