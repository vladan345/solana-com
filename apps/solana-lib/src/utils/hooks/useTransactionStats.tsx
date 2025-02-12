import React, { useState, useEffect } from 'react';
import { makeRPCCall } from "../rpcUtils";
import { FormattedNumber } from '../SolFormattedMessage';
import AnimatedTransactionCountup from "../AnimatedTransactionCountup";
import Loader from "../../molecules/SVGs/Loader";

export const PERF_UPDATE_SEC: number = 5;
export const SAMPLE_HISTORY_HOURS: number = 6;
export const TRANSACTION_COST: string = "$0.00025";
export const MAINNET_ENDPOINT: string = "https://explorer-api.mainnet-beta.solana.com";
export const INTERNAL_MAINNET_ENDPOINT: string = "";

export async function getRecentPerformanceSamples(
  abortSignal: AbortSignal,
  sampleHistoryHours: number,
  rpcNodeURL: string,
): Promise<number> {
  const recentPerformanceSamples = await makeRPCCall({
    abortSignal,
    method: "getRecentPerformanceSamples",
    params: [60 * sampleHistoryHours],
    rpcNodeURL,
  });

  if (!recentPerformanceSamples || !recentPerformanceSamples) {
    return 0;
  }

  const short: number[] = recentPerformanceSamples.result.reduce(
    (shortResults: number[], sample: any) => {
      if (sample.numTransactions !== 0) {
        shortResults.push(sample.numTransactions / sample.samplePeriodSecs);
      }
      return shortResults;
    },
    [],
  );

  const avgTps: number = Math.round(short[0]);
  return avgTps;
}

export async function displayRecentPerformanceSamples(
  abortSignal: AbortSignal,
  sampleHistoryHours: number,
  rpcNodeURL: string
): Promise<React.ReactElement> {
  const recentPerformanceSamples = await getRecentPerformanceSamples(abortSignal, sampleHistoryHours, rpcNodeURL);
  return <>{recentPerformanceSamples !== 0 ? <FormattedNumber value={recentPerformanceSamples}/> : <Loader />}</>;
}

export async function getVoteAccounts(
  abortSignal: AbortSignal,
  rpcNodeURL: string
): Promise<React.ReactElement> {
  const voteAccounts = await makeRPCCall({
    abortSignal,
    method: "getVoteAccounts",
    rpcNodeURL,
  });
  const count = typeof voteAccounts === 'object' ? voteAccounts.result.current.length : null;
  return <>{count ? <FormattedNumber value={count} /> : <Loader />}</>;
}

interface GetTransactionCounterProps {
  rpcNodeURL: string;
}

export const GetTransactionCounter: React.FC<GetTransactionCounterProps> = ({ rpcNodeURL }) => {
  const [avgTPS, setAvgTPS] = useState<number | null>(null);
  const [totalTransactionCount, setTotalTransactionCount] = useState<number>(0);

  const fetchTransactionCount = async (abortSignal: AbortSignal) => {
    const recentPerformanceSamples = await getRecentPerformanceSamples(abortSignal, SAMPLE_HISTORY_HOURS, rpcNodeURL);
    const transactionCount = await makeRPCCall({
      abortSignal,
      method: "getTransactionCount",
      rpcNodeURL,
    });
    if (!recentPerformanceSamples || !transactionCount) {
      setAvgTPS(0);
      setTotalTransactionCount(0);
      return;
    }
    setAvgTPS(recentPerformanceSamples);
    setTotalTransactionCount(transactionCount.result);
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetchTransactionCount(signal);

    const interval = setInterval(() => {
      fetchTransactionCount(signal);
    }, PERF_UPDATE_SEC * 1000);

    return () => {
      clearInterval(interval);
      if ( signal.reason ) {
        controller.abort(signal.reason);
      }
    };
  }, [rpcNodeURL]);

  return (
    <>
      {(avgTPS && totalTransactionCount) ?
        <AnimatedTransactionCountup
          avgTPS={avgTPS}
          totalTransactionCount={totalTransactionCount}
          perfUpdateSec={PERF_UPDATE_SEC}
        /> :
        <Loader />
      }
    </>
  );
};
