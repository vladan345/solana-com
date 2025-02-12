import React, { FC } from 'react';
import styles from './Titles.module.scss';

interface TitleProps {
  title: string;
  image: string;
  modifier: 'start' | 'end';
}

export const AccelerateTitle: FC<TitleProps> = ({ title, image, modifier }) => {
  const modifierClasses = {
    start: 'accelerate-title__start',
    end: 'accelerate-title__end',
  };

  // Use the mapping to get the correct class name
  let modifierClass = modifier ? modifierClasses[modifier] : '';

  return (
    <div className="tw-text-center tw-mx-auto tw-w-full tw-max-w-full container">
      <h2
        className={`tw-text-30 tablet:tw-text-36 tw-relative tw-uppercase tw-block tw-p-10 tw-inline-block tw-tracking-[2px] tw-mx-auto tw-text-center ${styles['accelerate-title']} ${styles['accelerate-title']} ${styles[modifierClass]}`}
      >
        <span className="tw-z-2 tw-p-2  tw-relative">{title}</span>
        <div
          className={styles['accelerate-title-bg-img']}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      </h2>
    </div>
  );
};
