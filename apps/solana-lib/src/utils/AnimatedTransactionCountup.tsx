import React from "react";
import { useCountUp } from "react-countup";
import useIsomorphicLayoutEffect from "./hooks/useIsomorphicLayoutEffect";

/**
 * Displays refurbished "continuous" transaction count.
 *
 * @param info
 * @param perfUpdateSec
 * @returns {JSX.Element}
 * @constructor
 */

interface AnimatedTransactionCountupProps {
  totalTransactionCount: number;
  avgTPS: number;
  perfUpdateSec: number;
}

const AnimatedTransactionCountup = ({ totalTransactionCount, avgTPS, perfUpdateSec }: AnimatedTransactionCountupProps) => {
  const countUpRef = React.useRef(null);
  const { update } = useCountUp({
    ref: countUpRef,
    start: totalTransactionCount,
    end: totalTransactionCount + avgTPS * perfUpdateSec,
    delay: 0,
    duration: perfUpdateSec + 2,
    startOnMount: true,
    separator: ",",
  });

  useIsomorphicLayoutEffect(() => {
    if (countUpRef.current) {
      update(totalTransactionCount + avgTPS * perfUpdateSec);
    }
  }, [countUpRef, totalTransactionCount]);
  return <span ref={countUpRef} />;
};
export default AnimatedTransactionCountup;
