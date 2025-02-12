import { MutableRefObject, RefObject, useEffect, useState } from 'react';

interface UseIntersectionArgs {
  onIntersection?: (index: number) => void;
  init?: IntersectionObserverInit;
}

const defaultInit: IntersectionObserverInit = {
  root: null,
  threshold: 0,
};

/**
 * Uses the Intersection Observer API to track intersection of a DOM element with the viewport.
 * Exposes a callback on intersection that is useful for arrays of refs and returns [isIntersecting, index]
 * for most other use cases
 *
 * @template T - The type of the observed DOM element.
 * @param {React.RefObject<T>[] | React.MutableRefObject<T>} refs - The ref(s) to the observed DOM element(s).
 * @param {UseIntersectionArgs} [utils] - Additional options for the useIntersection hook.
 * @param {IntersectionObserverInit} [utils.init] - Options to customize the Intersection Observer.
 * @param {(index: number) => void} [utils.onIntersection] - Callback function to execute when intersection occurs.
 * @returns {[boolean, number | null]} — A tuple containing the boolean value indicating intersection status
 * and the index of the intersecting element (if applicable).
 */
export const useIntersection = <T extends HTMLElement>(
  refs: React.RefObject<T>[] | React.MutableRefObject<T>,
  { init, ...utils }: UseIntersectionArgs = {
    init: defaultInit,
  }
): [boolean, number | null] => {
  const [intersectingIndex, setIntersectingIndex] = useState<number | null>(null);
  const hasMultipleRefs = Array.isArray(refs);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const observerCallback = (i: number) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIntersectingIndex(i);
          if (utils.onIntersection) {
            utils.onIntersection(i);
          }
        } else if (!hasMultipleRefs) {
          setIntersectingIndex(null);
        }
      });
    };

    const registerObserver = (ref: RefObject<T> | MutableRefObject<T>, index: number) => {
      if (ref.current) {
        const observer = new IntersectionObserver(observerCallback(index), { ...init });
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    if (hasMultipleRefs) {
      refs.forEach((ref, index) => {
        registerObserver(ref, index);
      });
    } else {
      registerObserver(refs, 0);
    }

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [init, utils, refs, hasMultipleRefs]);

  const isIntersecting = intersectingIndex !== null;

  return [isIntersecting, intersectingIndex];
};
