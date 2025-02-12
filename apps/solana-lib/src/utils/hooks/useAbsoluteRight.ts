import { MutableRefObject, RefObject, useEffect, useState } from 'react';

export const useAbsoluteRight = <T extends HTMLElement>(ref: MutableRefObject<T> | RefObject<T>) => {
  const [right, setRight] = useState<string>('0px');

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const boxRight = ref.current.getBoundingClientRect().right;
        const windowWidth = window.innerWidth;
        const newRight = windowWidth - boxRight;
        setRight(-newRight + 'px');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return right;
};
