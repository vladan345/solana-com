import React from 'react';
import { ComponentPropsWithoutRef, FC, useCallback } from 'react';
import { cva } from 'class-variance-authority';
import { PaginationButton } from '../../molecules/Pagination/PaginationButton';
import { PaginationDot } from '../../molecules/Pagination/PaginationDot';
import { cssMerge } from '../../utils/cssMerge';

interface PaginationProps extends ComponentPropsWithoutRef<'div'> {
  activeItem?: number;
  count: number;
  onPaginationClick: (dot: number) => void;
  onLeftClick: () => void;
  onRightClick: () => void;
}

const dotWrapper = cva(['tw-flex', 'tw-gap-1']);
const wrapper = cva(['tw-flex', 'tw-items-center', 'tw-gap-4', 'tw-ml-2', 'tw-mt-8 tw-z-20']);

export const Pagination: FC<PaginationProps> = ({
  count,
  className,
  activeItem,
  onRightClick,
  onLeftClick,
  onPaginationClick,
  ...props
}) => {
  const firstActive = activeItem === 0;
  const lastActive = activeItem === count - 1;
  const handleRightArrowClick = useCallback(() => onRightClick(), [onRightClick]);
  const handleLeftArrowClick = useCallback(() => onLeftClick(), [onLeftClick]);
  const handleActiveItem = useCallback((dotIndex: number) => onPaginationClick(dotIndex), [onPaginationClick]);

  return (
    <div className={cssMerge(wrapper({ className }))}>
      <PaginationButton side="left" onClick={handleLeftArrowClick} disabled={firstActive} aria-label="Left arrow" />
      <PaginationButton onClick={handleRightArrowClick} disabled={lastActive} aria-label="Right arrow" />
      <div className={cssMerge(dotWrapper())} {...props}>
        {Array.from({ length: count }, (_, i) => (
          <PaginationDot
            key={i}
            index={i}
            active={activeItem === i}
            onClick={() => handleActiveItem(i)}
            onKeyDown={({ key }) => key === 'Enter' && handleActiveItem(i)}
          />
        ))}
      </div>
    </div>
  );
};
