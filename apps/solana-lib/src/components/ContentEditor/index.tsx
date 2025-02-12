import React, { FC, ReactNode, useRef } from 'react';
import { SideBar } from '../Sidebar';
import { TocProvider } from '../Sidebar/utils/TocProvider';
import { useToc } from '../Sidebar/utils/useToc';
import { Section } from '../../molecules/Section';
import { CallToActionProps } from '../../components/Sidebar/CallToAction';

export interface ContentEditorProps {
  children: ReactNode;
  tocHeadline?: string;
  callToAction?: CallToActionProps;
}

const ContentEditorComponent: FC<ContentEditorProps> = ({ children, tocHeadline, callToAction }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  useToc(contentRef);

  return (
    <Section as="div" className="tw-grid lg:tw-grid-cols-12 lg:tw-gap-9">
      <SideBar tocHeadline={tocHeadline} callToAction={callToAction} className="lg:tw-col-span-3 lg:tw-self-start" />
      <div className="lg:tw-col-span-9" ref={contentRef}>
        {children}
      </div>
    </Section>
  );
};

export const ContentEditor: FC<ContentEditorProps> = props => (
  <TocProvider>
    <ContentEditorComponent {...props} />
  </TocProvider>
);
