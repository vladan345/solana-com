import React, { FC } from 'react';
import Image from 'next/image';
import { cva } from 'class-variance-authority';
import { CompanyProps, ImageProps } from '../../types';
import { Button, ButtonProps } from '../../molecules/Button';

export interface SwitcherCardProps {
  category?: string;
  image?: ImageProps;
  eyebrow?: string;
  featuredCompany?: CompanyProps;
  description?: string;
  button?: ButtonProps;
  companies?: CompanyProps[];
}

const wrapper = cva([
  'tw-flex',
  'tw-flex-col lg:tw-flex-row-reverse lg:tw-items-center',
  'tw-rounded-lg',
  'tw-bg-gray-800',
  'lg:tw-shadow-3xl-purple',
  'tw-w-full',
  'tw-overflow-hidden',
]);
const content = cva(['tw-p-6', 'tw-block', 'tw-w-full', 'lg:tw-w-1/2', 'md:tw-px-10', 'md:tw-py-8']);
const imageStyles = cva([
  'tw-rounded-b-lg',
  'tw-w-full',
  'lg:tw-w-1/2',
  'lg:tw-rounded-l-lg',
  'lg:tw-rounded-r-none',
  'tw-h-[250px]',
  'lg:tw-h-[456px]',
  'tw-object-cover',
]);

export const SwitcherCard: FC<SwitcherCardProps> = ({ image, eyebrow, featuredCompany, description, button }) => {
  return (
    <div className={wrapper()}>
      <div className={content()}>
        {eyebrow && <span className="tw-eyebrow tw-mb-4">{eyebrow}</span>}
        {featuredCompany && featuredCompany.logo && featuredCompany.logo.src && (
          <Image
            src={featuredCompany.logo.src || ''}
            alt={featuredCompany.name || ''}
            className="tw-max-w-[50%] tw-max-h-[80px] tw-w-auto tw-h-auto tw-mb-4"
            width={264}
            height={80}
            placeholder='blur'
            blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAAfE+zUAAAAHElEQVQImWP4//8/w38GIAXDIBKE0DHxglMKAAIMAB8FhS2+8qo8AAAAAElFTkSuQmCC'}
          />
        )}
        {description && <p className="tw-text-lg tw-text-gray-300 tw-mb-4 tw-text-pretty">{description}</p>}
        {button && <Button {...button} className={`tw-whitespace-pre-wrap`} />}
      </div>
      {image && image.src && (
        <Image
          src={image.src || ''}
          alt={image.alt || ''}
          width={608}
          height={456}
          className={imageStyles()}
          placeholder='blur'
          blurDataURL={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAAfE+zUAAAAHElEQVQImWP4//8/w38GIAXDIBKE0DHxglMKAAIMAB8FhS2+8qo8AAAAAElFTkSuQmCC'}
        />
      )}
    </div>
  );
};
