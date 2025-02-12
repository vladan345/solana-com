import React, { FC } from 'react';
import Image from 'next/image';
import styles from './SpeakersCard.module.scss';

export interface SpeakerCardProps {
    speakerName?: string;
    title?: string;
    image: string;
}

const SpeakerCard: FC<SpeakerCardProps> = ({ speakerName, title, image }) => {
    return (
        <article className={`tw-flex tw-flex-col tw-justify-center tw-items-center tw-max-w-[230px] tw-w-full tw-z-[2] tw-mx-auto`}>
            <div className={`tw-relative tw-mb-2.5 ${styles["speakers-card__headshot-wrapper"]}`}>
                <Image
                    src={image}
                    alt={`Speaker ${speakerName} headshot`}
                    width="150"
                    height="150"
                    className={`tw-rounded-full tw-relative tw-w-full tw-max-w-[150px] tw-z-3`}
                ></Image>
            </div>
            <h3 className="tw-text-center tw-font-500 tw-tracking-[2px] tw-uppercase tw-text-white tw-text-[20px] tw-mt-2">{speakerName}</h3>
            <p className="tw-text-center tw-font-500 tw-tracking-[2px] tw-uppercase tw-text-purple-350 tw-text-[16px] tw-leading-5">{title}</p>
        </article>
    )
}

export default SpeakerCard;