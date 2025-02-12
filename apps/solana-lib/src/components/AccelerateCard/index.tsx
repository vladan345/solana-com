import React, { FC } from 'react';
import { Button, ButtonProps } from '../../molecules/Button';
import { HtmlParser } from '../RichTextComponents/HtmlParser';
import styles from './Card.module.scss';

export interface AccelerateCardProps {
  heading?: string;
  content: string;
  buttons?: Maybe<ButtonProps[]>;
}

export const AccelerateCard: FC<AccelerateCardProps> = ({ heading, content, buttons }) => {
  return (
    <article
      className={`tw-flex tw-flex-col tw-justify-start tw-max-w-[500px] tw-bg-[#1f183a] tw-rounded-[20px] tw-text-left tw-p-10 tw-w-full tw-z-[2] tw-mx-auto tw-h-full`}
    >
      <h3 className="tw-font-light tw-uppercase tw-mb-4 tw-text-24">{heading}</h3>
      <div className={styles['card__content']}>
        <HtmlParser rawHtml={content} />
      </div>
      <div className="tw-mt-auto">
        {buttons && buttons.map((button, i) => <Button key={i} {...button} className="tw-w-fit" />)}
      </div>
    </article>
  );
};
