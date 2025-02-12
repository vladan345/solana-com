import React, { FC } from 'react';
import { Section } from '../../../molecules/Section';
import SpeakerCard, { SpeakerCardProps } from './SpeakersCard';

interface SpeakerProps {
  speakers?: Maybe<SpeakerCardProps[]>;
}

export const BreakpointSpeakers: FC<SpeakerProps> = ({ speakers }) => {
  return (
    <Section className="container tw-w-full tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-5 tw-items-start">
      {speakers &&
        speakers.map((speaker, i) => (
          <SpeakerCard key={i} speakerName={speaker.speakerName} title={speaker.title} image={speaker.image} />
        ))}
    </Section>
  );
};
