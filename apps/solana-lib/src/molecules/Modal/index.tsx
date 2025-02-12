import React, { ReactNode, forwardRef } from 'react';
import ReactDOM from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({ isOpen, children }, ref) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="lg:tw-grid tw-place-items-center tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-absolute tw-bg-common-black/60">
      <div ref={ref}>{children}</div>
    </div>,
    document.body,
    'modal'
  );
});
