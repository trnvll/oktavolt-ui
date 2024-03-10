'use client'

import {ComponentPropsWithRef} from 'react';
import {cn} from '@/lib/utils';

interface ContainerProps extends ComponentPropsWithRef<'div'> {}

export const Container = ({ children, className }: ContainerProps) => {
  const combinedClassNames = cn('', className);
  return <div className={combinedClassNames}>{children}</div>;
};

export const container = (props: ContainerProps) => {
  return <Container {...props} />;
};
