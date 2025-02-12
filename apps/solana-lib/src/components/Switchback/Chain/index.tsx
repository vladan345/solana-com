import React, { FC } from 'react';
import Image from 'next/image';
import { Switchback, SwitchbackProps } from '../Single';
import desktop from '../assets/beams_desktop.jpg';
import tablet from '../assets/beams_tablet.jpg';
import mobile from '../assets/beams_mobile.jpg';

interface SwitchbackChainProps {
  switchbacks: SwitchbackProps[];
  hideBackground?: boolean;
}

export const SwitchbackChain: FC<SwitchbackChainProps> = ({ switchbacks, hideBackground }) => {
  return (
    <div className="tw-relative">
      {!hideBackground && <Image src={desktop} fill alt="" className="tw-object-cover tw-hidden lg:tw-block" />}
      {!hideBackground && (
        <Image src={tablet} fill alt="" className="tw-object-cover tw-hidden sm:tw-block lg:tw-hidden" />
      )}
      {!hideBackground && <Image src={mobile} fill alt="" className="tw-object-cover sm:tw-hidden" />}
      {switchbacks.map((switchback, index) => {
        const assetSide = index % 2 === 0 ? 'right' : 'left';

        return <Switchback key={`switchback-${index}`} {...switchback} assetSide={assetSide} hideBackground />;
      })}
    </div>
  );
};
