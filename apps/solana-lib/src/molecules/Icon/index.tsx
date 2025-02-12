import React, { FC } from 'react';
import { IconIds } from './iconIds';
import { cssMerge } from '../../utils/cssMerge';

interface IconProps extends React.SVGAttributes<SVGElement> {
  id: IconIds;
  size?: number | string;
  className?: string;
  fill?: string;
  stroke?: string;
}

export const Icon: FC<IconProps> = ({ id, size, className, fill, stroke, ...props }) => (
  <svg width={size || 24} height={size || 24} className={cssMerge('tw-inline', className)} role="img" {...props}>
    <use href={`/sprite.svg#${id}`} fill={fill || 'currentColor'} stroke={stroke} />
  </svg>
);
