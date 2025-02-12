import { useEffect, useRef, useState } from 'react';

export const useAnimatedHeight = <T extends HTMLElement>(open?: boolean | null) => {
  const [height, setHeight] = useState('0px');
  const ref = useRef<T | null>(null);
  useEffect(() => {
    if (open && ref.current) {
      const newHeight = ref.current.scrollHeight;
      setHeight(newHeight + 'px');
    } else {
      setHeight('0px');
    }
  }, [open]);

  return [height, ref] as const;
};
