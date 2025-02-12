import { TwitterShareButton, FacebookShareButton, TelegramShareButton, LinkedinShareButton } from 'react-share';
import React, { ComponentPropsWithoutRef, FC, useState, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { Icon } from '../../molecules/Icon';
import { cssMerge } from '../../utils/cssMerge';
import { useCopyToClipboard } from '../../utils/hooks/useCopyToClipboard';
import { Tooltip } from '../../molecules/Tooltip';

export interface SocialShareButtonProps extends ComponentPropsWithoutRef<'div'> {
  slug: string;
  title?: string;
  color?: 'purple';
}

const button = cva(['tw-cursor-pointer'], {
  variants: {
    color: {
      purple: ['tw-text-purple-500', 'hover:tw-text-common-black', 'dark:hover:!tw-text-common-white'],
    },
  },
  defaultVariants: {
    color: 'purple',
  },
});

export const SocialShareButtons: FC<SocialShareButtonProps> = ({
  slug,
  title,
  className,
  color = 'purple',
  ...props
}) => {
  const [copied, setCopied] = useState(false);
  const { copy } = useCopyToClipboard();
  const [url, setUrl] = useState('');

  useEffect(() => {
    // Remove leading slash from slug if exists
    const formattedSlug = slug.startsWith('/') ? slug.substring(1) : slug;
    // Construct URL
    setUrl(`${window.location.origin}/${formattedSlug}`);
  }, [slug]);

  const handleCopy = () => {
    copy(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className={cssMerge('tw-flex', 'tw-gap-6', className)} {...props}>
      <TwitterShareButton url={url} title={title}>
        <Icon id="twitter-share" className={button({ color })} size={20} />
      </TwitterShareButton>
      <FacebookShareButton url={url}>
        <Icon id="facebook-share" className={button({ color })} />
      </FacebookShareButton>
      <LinkedinShareButton url={url} title={title}>
        <Icon id="linkedin-share" className={button({ color })} />
      </LinkedinShareButton>
      <TelegramShareButton url={url} title={title}>
        <Icon id="telegram-share" className={button({ color })} />
      </TelegramShareButton>
      <Tooltip title="Copied!" withArrow={false} open={copied}>
        <Icon id="link" onClick={handleCopy} className={button({ color })} role="button" aria-label="Copy URL" />
      </Tooltip>
    </div>
  );
};
