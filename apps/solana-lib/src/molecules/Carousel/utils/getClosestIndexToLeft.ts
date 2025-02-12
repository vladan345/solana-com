import { MutableRefObject, RefObject } from 'react';

export const getClosestIndexToScrollLeft = <Box extends HTMLElement, Card extends HTMLElement>(
  scrollBox: MutableRefObject<Maybe<Box>>,
  refs: RefObject<Card>[]
): number => {
  if (!scrollBox.current || refs.length === 0) {
    return 0; // Default to the first index if no refs are available
  }

  const { scrollLeft, offsetLeft } = scrollBox.current;

  let closestIndex = 0;
  let closestDistance = Math.abs(offsetLeft - scrollLeft);

  for (let i = 1; i < refs.length; i++) {
    const ref = refs[i].current;
    if (ref) {
      const distance = Math.abs(ref.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestIndex = i;
        closestDistance = distance;
      }
    }
  }

  return closestIndex;
};
