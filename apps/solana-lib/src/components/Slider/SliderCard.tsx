import React from 'react';
import { ComponentPropsWithoutRef, FC } from 'react';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import { Button, ButtonProps } from '../../molecules/Button';
import Link from '../../molecules/Link';
import { ImageProps } from '../../types';
import { cssMerge } from '../../utils/cssMerge';
import { HtmlParser } from '../RichTextComponents/HtmlParser';

// TODO going to hold off with storybook on this card until there is some transparency on the design

export interface SliderCardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'title'> {
  image?: ImageProps;
  title?: string;
  body?: string;
  button?: ButtonProps;
  url?: string;
}

const sliderCard = cva([
  'tw-bg-gray-800',
  'tw-m-1',
  'tw-w-80 lg:tw-w-96',
  'tw-rounded-lg',
  'tw-card',
  'tw-p-0',
  'tw-flex',
  'tw-flex-col',
  'tw-h-full',
  'tw-border-gradient',
  'hover:tw-shadow-2xl hover:tw-border-gradient-primary',
]);
const content = cva(['tw-grid tw-flex-1 tw-gap-1.5 tw-rounded-t-none tw-p-6']);

const SliderCard: FC<SliderCardProps> = ({ title, image, body, url, className, button, ...props }) => {
  let modifiedButton = button;

  if (url && button) {
    modifiedButton = { ...button, url: undefined };
  }

  return (
    <Link href={url || ''}>
      <article className={cssMerge(sliderCard({ className }))} {...props}>
        {image && image.src && (
          <div className="tw-relative tw-h-48 lg:tw-h-56">
            <Image src={image.src} alt={image.alt || ''} fill className="tw-rounded-t-lg tw-object-cover" />
          </div>
        )}
        <div className={content()}>
          {typeof title === 'string' &&
            <h3 className="tw-font-body tw-text-lg tw-leading-tight">{title}</h3>
          }
          {typeof body === 'string' && body &&
            <HtmlParser classes="tw-text-base tw-text-gray-300" rawHtml={body} />
          }
          <Button {...modifiedButton} className="tw-mt-8" />
        </div>
      </article>
    </Link>
  );
};

export default SliderCard;
