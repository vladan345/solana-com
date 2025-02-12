import React, { ComponentPropsWithoutRef, FC } from 'react';
import Image from 'next/image';
import { cva } from 'class-variance-authority';
import { CompanyProps } from '../../types';
import { cssMerge } from '../../utils/cssMerge';

interface SwitcherLogoBarProps extends ComponentPropsWithoutRef<'div'> {
  companies: CompanyProps[];
}

const wrapper = cva([
  'tw-flex',
  'tw-items-center',
  'tw-gap-8',
  'tw-justify-between',
  'tw-overflow-scroll',
  'tw-no-scrollbar',
  'tw-pr-10',
  'lg:tw-pr-0',
  'lg:mx-auto',
  'tw-relative',
]);

const scrollGradient = cva([
  'after:tw-pointer-events-none',
  'after:tw-h-full',
  'after:tw-w-20',
  'after:tw-bg-gradient-scroll',
  'after:tw-absolute',
  'after:tw-right-0',
  'after:tw-top-0',
  'lg:after:tw-invisible',
]);

export const SwitcherLogoBar: FC<SwitcherLogoBarProps> = ({ companies, className }) => {
  return (
    <div className={cssMerge('tw-block tw-w-full tw-overflow-hidden tw-relative -tw-mr-6 lg:tw-mr-0', scrollGradient())}>
      <div className={cssMerge(wrapper(), className)}>
        {companies.map((company, index) =>
          company.logo && company.logo.src && (
            <Image
              key={index}
              src={company.logo.src || ''}
              alt={company.logo.alt || company.name || ''}
              width={120}
              height={40}
              className="tw-w-auto tw-h-auto tw-max-w-[120px] tw-max-h-[40px] tw-brightness-0 tw-invert"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAAfE+zUAAAAHElEQVQImWP4//8/w38GIAXDIBKE0DHxglMKAAIMAB8FhS2+8qo8AAAAAElFTkSuQmCC"
            />
          )
        )}
      </div>
    </div>
  );
};
