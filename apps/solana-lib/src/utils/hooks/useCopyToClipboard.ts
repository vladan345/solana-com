import { useEffect, useState } from 'react';

type CopiedValue = string | null;
type CopyFn = (text: string) => void;

export const useCopyToClipboard = () => {
  const [value, setClipboard] = useState<CopiedValue>('');

  const copy: CopyFn = text => {
    if (!navigator || !navigator.clipboard) {
      console.warn('Clipboard not supported');
    }

    try {
      navigator.clipboard.writeText(text);
      setClipboard(text);
    } catch (error) {
      console.warn('Copy failed', error);
      setClipboard('');
    }
  };

  return { value, copy };
};
