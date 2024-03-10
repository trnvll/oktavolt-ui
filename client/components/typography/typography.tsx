'use client'

import {ComponentProps} from 'react';
import {cn} from '@/lib/utils';

export interface TypographyProps extends ComponentProps<'p'> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'text-lg' | 'text-md' | 'text-sm'
}

const variants = {
  h1: 'text-6xl font-bold',
  h2: 'text-5xl font-semibold',
  h3: 'text-4xl font-medium',
  h4: 'text-3xl font-normal',
  'text-lg': 'text-lg',
  'text-md': 'text-base',
  'text-sm': 'text-sm',
};

export const Typography = (props: TypographyProps) => {
  const { variant, className, children } = props
  const combinedClassNames = cn(variants[variant], className);

  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
      const Component = variant as keyof JSX.IntrinsicElements;
      return <Component className={combinedClassNames}>{children}</Component>;
    default:
      return <p className={combinedClassNames}>{children}</p>;
  }
};

export const typography = (props: TypographyProps) => {
  return <Typography {...props} />;
};
