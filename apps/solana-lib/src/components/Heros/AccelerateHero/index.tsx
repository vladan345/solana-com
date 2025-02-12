import React, { FC } from 'react';
import Image from 'next/image';
import styles from './AccelerateHero.module.scss';
import { HtmlParser } from '../../RichTextComponents/HtmlParser';

interface AccelerateHeroProps {
  logo: string;
}

export const AccelerateHero: FC<AccelerateHeroProps> = ({ logo }) => {
  return (
    <section className={`${styles['hero']}`}>
      <h1>
        <Image src={logo} alt="Accelerate logo" className="img-fluid tw-mx-auto tw-my-5" width="600" height="257" />
      </h1>
      <div className={`tw-text-center ${styles['hero__copy-container']}`}></div>
    </section>
  );
};
