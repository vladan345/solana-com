import React, { ElementType, FC, useState } from 'react';
import { Section } from '../../molecules/Section';
import { SwitcherCard, SwitcherCardProps } from './SwitcherCard';
import { SwitcherButtons } from './SwitcherButtons';
import { SwitcherLogoBar } from './SwitcherLogoBar';

interface SwitcherProps {
  eyebrow?: string;
  headline?: string;
  headingAs?: ElementType;
  body?: string;
  switcherCards?: SwitcherCardProps[];
}

export const Switcher: FC<SwitcherProps> = ({ eyebrow, headline, body, switcherCards, headingAs = 'h2' }) => {
  if (!switcherCards || switcherCards.length < 1) {
    return null;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const Heading = headingAs;
  const activeCard = switcherCards[activeIndex];
  const activeCompanies = switcherCards[activeIndex].companies;

  return (
    <Section className="tw-grid tw-gap-8">
      <div className="tw-flex tw-flex-col tw-gap-8 lg:tw-flex-row lg:tw-items-end lg:tw-justify-between">
        <div className="tw-flex tw-flex-col tw-gap-4 tw-max-w-2xl">
          {eyebrow && <span className="tw-eyebrow">{eyebrow}</span>}
          {headline && (
            <Heading className="tw-font-medium tw-text-display-sm sm:tw-text-display-lg">{headline}</Heading>
          )}
          {body && <p className="tw-text-lg tw-text-gray-300 sm:tw-text-xl">{body}</p>}
        </div>
        <SwitcherButtons
          switcherCards={switcherCards}
          activeIndex={activeIndex}
          setActive={setActiveIndex}
          className="tw-hidden lg:tw-flex "
        />
      </div>
      {/* two renders of buttons required for horizontal scrolling on mobile */}
      <SwitcherButtons
        switcherCards={switcherCards}
        activeIndex={activeIndex}
        setActive={setActiveIndex}
        className="lg:tw-hidden tw-overflow-scroll tw-no-scrollbar -lg:tw-mr-6"
      />
      <SwitcherCard {...activeCard} />
      {activeCompanies && <SwitcherLogoBar companies={activeCompanies} />}
    </Section>
  );
};
