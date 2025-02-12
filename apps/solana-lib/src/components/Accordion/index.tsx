import React, { useEffect, ElementType, FC, useState } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cssMerge } from '../../utils/cssMerge';
import { AccordionItem, AccordionItemProps } from './AccordionItem';
import { Section } from '../../molecules/Section';
import slugify from 'slugify';

interface AccordionProps extends VariantProps<typeof wrapper> {
  accordions: AccordionItemProps[];
  eyebrow?: string;
  headline?: string;
  headingAs?: ElementType;
}

const wrapper = cva(['tw-grid', 'tw-gap-8', 'md:tw-gap-12', 'lg:tw-grid-cols-12', 'lg:tw-gap-20']);
const headlineStyles = cva(['tw-font-medium', 'tw-text-display-sm', 'md:tw-text-display-md']);

export const Accordion: FC<AccordionProps> = ({ accordions, eyebrow, headline, headingAs }) => {
  const H = headingAs || 'h2';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accordionClick = (index: number) => {
    const currentOpenIndex = openIndex === index ? null : index;
    setOpenIndex(currentOpenIndex);

    // Update URL with hash when accordion is clicked.
    if (currentOpenIndex === index && accordions[index].title) {
      const slug = slugify(accordions[index].title, { lower: true });
      window.history.pushState(null, '', `#${slug}`);
    } else {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  useEffect(() => {
    // On component mount, check if there's a hash in the URL.
    const hash = decodeURI(window.location.hash.substr(1));
    if (hash) {
      const index = accordions.findIndex(item => slugify(item.title, { lower: true }) === hash);
      if (index !== -1) {
        setOpenIndex(index);
        // Scroll to the accordion
        const initAccordion = document.getElementById(`accordion-${index}`);
        if (initAccordion) {
          initAccordion.scrollIntoView({ block: 'center' });
        }
      }
    }
  }, [accordions]);

  return (
    <Section className={cssMerge(wrapper())}>
      {(eyebrow || headline) && (
        <div className="lg:tw-col-span-5">
          {eyebrow && <p className="tw-eyebrow tw-mb-4">{eyebrow}</p>}
          {headline && <H className={headlineStyles()}>{headline}</H>}
        </div>
      )}
      {accordions && (
        <div className={eyebrow || headline ? "lg:tw-col-span-7 lg:tw-col-start-6" : "lg:tw-col-span-10 lg:tw-col-start-2"}>
          {accordions.map((item, i) => (
            <AccordionItem
              {...item}
              id={`accordion-${i}`}
              open={openIndex === i}
              onClick={() => accordionClick(i)}
              onKeyDown={({ key }) => key === 'Enter' || (key === ' ' && accordionClick(i))}
              tabIndex={0}
              key={i}
            />
          ))}
        </div>
      )}
    </Section>
  );
};
