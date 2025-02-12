import { useEffect, useState } from 'react';

type ClickAwayEvent = MouseEvent | TouchEvent;

/**
 * A custom hook that manages the open state of an HTML element (including click away and scroll freeze).
 * @template T - The type of the HTML element.
 * @param {boolean} [defaultState=false] - The default state of the element.
 * @returns {{ ref: React.MutableRefObject<T | null>, open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }} - An object containing the ref to the HTML element, the open state, and a function to set the open state.
 */
const useOpenState = <T extends HTMLElement>(ref?: React.RefObject<T>, defaultState = false) => {
  const [open, setOpen] = useState(defaultState);

  useEffect(() => {
    if(!ref) {
      return
    }
    const handleClickAway = (event: ClickAwayEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeydown = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickAway);
      document.addEventListener('touchstart', handleClickAway);
      document.addEventListener('keydown', handleKeydown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickAway);
      document.removeEventListener('touchstart', handleClickAway);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [ref, open]);

  useEffect(() => {
    const body = document.body;
    open ? body.classList.add('tw-overflow-hidden') : body.classList.remove('tw-overflow-hidden');

    return () => {
      body.classList.remove('tw-overflow-hidden');
    };
  }, [open]);

  return [open, setOpen] as const;
};

export default useOpenState;
