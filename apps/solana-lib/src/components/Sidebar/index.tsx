import React, { ComponentPropsWithoutRef, FC } from 'react';
import { TableOfContents } from './TableOfContents';
import { cssMerge } from '../../utils/cssMerge';
import { CallToAction, CallToActionProps } from './CallToAction';

interface SideBarProps extends ComponentPropsWithoutRef<'aside'> {
  tocHeadline?: string;
  callToAction?: CallToActionProps;
}

export const SideBar: FC<SideBarProps> = ({ tocHeadline, className, callToAction }) => {
  return (
    <aside className={cssMerge('lg:tw-sticky lg:tw-top-28', className)}>
      {tocHeadline && <TableOfContents headline={tocHeadline} />}
      {callToAction && <CallToAction {...callToAction} />}
    </aside>
  );
};
