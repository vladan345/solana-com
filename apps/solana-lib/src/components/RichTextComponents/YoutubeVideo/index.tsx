import React from 'react';
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const YoutubeVideo = ({ url }: { url?: string }) => {
  return (
    url && (
      <div className="tw-w-full tw-aspect-video">
        <ReactPlayer url={url} width="100%" height="100%" controls />
      </div>
    )
  );
};
