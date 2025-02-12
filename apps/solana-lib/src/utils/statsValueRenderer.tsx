import React, { useState, useEffect, ReactNode } from 'react';
import { StatValue } from '../components/Stats/StatCard';
import { displayRecentPerformanceSamples, getVoteAccounts, GetTransactionCounter, SAMPLE_HISTORY_HOURS, MAINNET_ENDPOINT, INTERNAL_MAINNET_ENDPOINT } from './hooks/useTransactionStats';
import Loader from '../molecules/SVGs/Loader';

const isDevelopment: boolean = typeof window !== 'undefined' && window.location.hostname !== 'solana.com';

// Updated to accommodate both functions returning promises of React elements and React component types.
type FetchDataFunction = () => Promise<React.ReactElement<any, string | React.JSXElementConstructor<any>> | any> | React.ElementType;

interface Stat {
  stat?: string;
  value?: StatValue;
}

const statsValueRenderer = (stat: Stat) => {
  const rpcNodeURL = !isDevelopment ? MAINNET_ENDPOINT : INTERNAL_MAINNET_ENDPOINT;

  const [displayValue, setDisplayValue] = useState<string | ReactNode | undefined>(undefined);

  useEffect(() => {
    const endpointFunctions: Record<string, Record<string, FetchDataFunction>> = {
      'Explorer API': {
        'Transactions per second': () => displayRecentPerformanceSamples(new AbortController().signal, SAMPLE_HISTORY_HOURS, rpcNodeURL),
        'Total Transactions': async () => Promise.resolve(<GetTransactionCounter rpcNodeURL={rpcNodeURL} />), // Render the component with props
        'Validator Nodes': () => getVoteAccounts(new AbortController().signal, rpcNodeURL),
        // Add other endpoints and their functions here
      }
      // Add other sources and their endpoints here
    };

    const fetchStatValue = async () => {
      if (!stat || !stat.value) {
        setDisplayValue(stat.stat);
        return;
      }

      const { statType, staticValue, dynamicValueSource, dynamicValueEndpoint } = stat.value;

      if (statType === 'static') {
        setDisplayValue(staticValue);
        return;
      }

      if (statType !== 'dynamic' || !dynamicValueSource || !dynamicValueEndpoint) {
        if (isDevelopment) {
          console.error('Unsupported stat type or missing dynamic endpoint');
        }
        return;
      }

      try {
        const fetchDataFunction: FetchDataFunction = endpointFunctions[dynamicValueSource][dynamicValueEndpoint];
        if (!fetchDataFunction) {
          if (isDevelopment) {
            console.error('Invalid API endpoint:', dynamicValueEndpoint);
          }
          return;
        }

        // Check if the fetchDataFunction is a React component or a function.
        if (React.isValidElement(fetchDataFunction)) {
          // If it's a component, render it directly.
          setDisplayValue(fetchDataFunction);
        } else if (typeof fetchDataFunction === 'function') {
          // If it's a function, await its result.
          const data = await fetchDataFunction();
          setDisplayValue(data);
        } else {
          if (isDevelopment) {
            console.error('Invalid fetchDataFunction:', fetchDataFunction);
          }
        }
      } catch (error) {
        if (isDevelopment) {
          console.error('Error fetching data from API:', error);
        }
      }
    };

    fetchStatValue();
  }, [stat.value]);

  return (
    <>
      {displayValue ? <>{displayValue}</> : <Loader />}
    </>
  );
};

export default statsValueRenderer;
