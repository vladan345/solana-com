import type { KeyboardEvent } from 'react';

export const onKeyDown = (
  event: KeyboardEvent<HTMLElement | SVGSVGElement>,
  action: () => void,
  options?: {
    targetKey?: string | string[],
  }
) => {
const targetKey = options && options.targetKey ? options.targetKey : ['Enter', ' '];

  if (event.key === targetKey || targetKey.includes(event.key)) {
    event.preventDefault();
    action();
  }
};
