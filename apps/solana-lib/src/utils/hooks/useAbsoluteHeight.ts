import { MutableRefObject, RefObject, useEffect, useState } from 'react';

export const useAbsoluteHeight = <T extends HTMLElement>(ref: MutableRefObject<T> | RefObject<T>) => {
  const [height, setHeight] = useState('0px');

  const handleResize = () => {
    if (ref.current) {
      const newHeight = ref.current.getBoundingClientRect().height;
      setHeight(newHeight + 'px');
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return height;
};
