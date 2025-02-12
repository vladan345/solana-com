import React, { ComponentPropsWithoutRef, FC, useRef } from 'react';
import { cva } from 'class-variance-authority';
import ReactPlayer from 'react-player/youtube';
import { Modal } from '../../molecules/Modal';
import { useModal } from '../../molecules/Modal/utils/useModal';
import { Button, ButtonProps } from '../../molecules/Button';
import { Icon } from '../../molecules/Icon';

export interface VideoPopupProps extends ComponentPropsWithoutRef<'div'> {
  url?: string;
  headline?: string;
  body?: string;
  button?: ButtonProps;
}
const modalContainer = cva([
  [
    'tw-h-device tw-py-12 tw-bg-common-black tw-max-w-5xl tw-relative',
    'lg:tw-h-full lg:tw-border lg:tw-shadow-2xl lg:tw-border-gray-700 lg:tw-rounded-lg',
  ],
]);
const videoWrapper = cva(['tw-w-screen tw-max-w-5xl tw-aspect-video tw-mb-8', 'lg:tw-px-6']);
const content = cva(['tw-grid tw-px-6 tw-gap-4', 'md:tw-grid-flow-dense md:tw-grid-cols-5']);
const heading = cva([
  'tw-text-display-xs tw-font-medium',
  'md:tw-col-span-4 md:tw-text-display-sm',
  'lg:tw-text-display-md',
]);
const bodyCopy = cva(['tw-text-base tw-text-gray-300', 'md:tw-col-span-5']);

export const VideoPopup: FC<VideoPopupProps> = ({ children, url, headline, body, button }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, { toggleModal }] = useModal(ref);

  return url ? (
    <>
      <span role="button" aria-label="Opens video modal" onClick={toggleModal}>
        {children}
      </span>
      <Modal isOpen={isOpen} ref={ref}>
        <div className={modalContainer()}>
          <Button hierarchy="link" size="xl" className="tw-absolute tw-top-2 tw-right-2" onClick={toggleModal}>
            <Icon id="x-close" stroke="gray-400" />
          </Button>
          {url && (
            <div className={videoWrapper()}>
              <ReactPlayer url={url} width="100%" height="100%" controls playing />
            </div>
          )}
          <div className={content()}>
            {headline && <h3 className={heading()}>{headline}</h3>}
            {body && <p className={bodyCopy()}>{body}</p>}
            {button && <Button {...button} className="md:tw-justify-self-end" />}
          </div>
        </div>
      </Modal>
    </>
  ) : (
    <>{children}</>
  );
};
