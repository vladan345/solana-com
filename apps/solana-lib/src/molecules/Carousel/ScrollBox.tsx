import React, { Children, ComponentPropsWithoutRef, createRef, FC, useRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import useCarousel from '../../molecules/Carousel/utils/useCarousel';
import { Pagination } from '../../molecules/Pagination';
import { cssMerge } from '../../utils/cssMerge';
import { useAbsoluteHeight } from '../../utils/hooks/useAbsoluteHeight';
import { useAbsoluteRight } from '../../utils/hooks/useAbsoluteRight';

export interface CarouselProps
  extends ComponentPropsWithoutRef<'section'>,
    VariantProps<typeof card>,
    VariantProps<typeof gradients> {
  pagination?: boolean;
  hideGradient?: boolean;
}

const scrollBox = cva(
  [
    'tw-flex',
    'tw-overflow-x-scroll',
    'tw-bg',
    'tw-no-scrollbar',
    'tw-scroll-smooth',
    'tw-items-stretch',
    'tw-overscroll-auto',
    'tw-right-0',
    'tw-scroll-padding',
    'tw-absolute',
    'tw-left-0',
  ],
  {
    variants: {
      scrollSnap: {
        true: ['tw-snap-mandatory tw-snap-x'],
      },
    },
    defaultVariants: {
      scrollSnap: true,
    },
  }
);
const card = cva(['tw-mx-4', 'first:tw-ml-0', 'last:tw-mr-[2000px]', 'tw-flex-full', 'tw-mb-8'], {
  variants: {
    scrollSnap: {
      true: ['tw-snap-start'],
    },
  },
  defaultVariants: {
    scrollSnap: true,
  },
});
const gradients = cva([
  'tw-absolute',
  'tw-right-0',
  'tw-top-0',
  'tw-w-24',
  'tw-bottom-0',
  'tw-pointer-events-none',
  'tw-carousel-fade',
  'tw-z-50',
]);

const ScrollBox: FC<CarouselProps> = ({ children, pagination = true, hideGradient = false }) => {
  const refs = Array.from({ length: Children.count(children) }, () => createRef<HTMLDivElement>());
  const scrollBoxRef = useRef<Maybe<HTMLDivElement>>(null);
  const height = useAbsoluteHeight(refs[0]);
  const right = useAbsoluteRight(scrollBoxRef);
  const { activeIndex, onPaginationClick, onLeftClick, onRightClick } = useCarousel(scrollBoxRef, refs);

  return (
    <>
      <div className="tw-relative" style={{ height }}>
        <div ref={scrollBoxRef} className={cssMerge(scrollBox())} style={{ right }}>
          {Children.map(children, (child, i) => {
            return (
              <div key={`carousel-card-${i}`} ref={refs[i]} className={cssMerge(card())}>
                {child}
              </div>
            );
          })}
        </div>
      </div>
      {pagination && (
        <Pagination
          count={Children.count(children)}
          onPaginationClick={onPaginationClick}
          onLeftClick={onLeftClick}
          onRightClick={onRightClick}
          activeItem={activeIndex}
        />
      )}
      {!hideGradient && <div className={cssMerge(gradients())} />}
    </>
  );
};

export default ScrollBox;
