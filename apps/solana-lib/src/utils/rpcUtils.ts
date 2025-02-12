import getNextRequestId from './getNextRequestId';

/**
 * Sends an RPC request to a Solana RPC node.
 *
 * @param rpcNodeURL
 * @param method
 * @param params
 * @returns {Promise<any>}
 */

interface RPCCallParams {
  abortSignal: AbortSignal;
  method: string;
  params?: any[];
  rpcNodeURL: string;
}

const isDevelopment: boolean = typeof window !== 'undefined' && window.location.hostname !== 'solana.com';

// Limit the number of concurrent requests
class RequestQueue {
  private queue: (() => void)[];
  private concurrentRequests: number;
  private maxConcurrentRequests: number;

  constructor(maxConcurrentRequests: number) {
    this.queue = [];
    this.concurrentRequests = 0;
    this.maxConcurrentRequests = maxConcurrentRequests;
  }

  add(request: () => Promise<void>) {
    this.queue.push(() =>
      request().finally(() => {
        this.concurrentRequests--;
        this.next();
      })
    );
    this.next();
  }

  private next() {
    if (this.concurrentRequests < this.maxConcurrentRequests && this.queue.length > 0) {
      const request = this.queue.shift()!;
      this.concurrentRequests++;
      request();
    }
  }
}

// Create a single shared queue for all RPC calls if in development mode
const sharedRequestQueue = isDevelopment ? new RequestQueue(3) : null; // Limit to 3 concurrent requests in development

export async function makeRPCCall({ abortSignal, method, params, rpcNodeURL }: RPCCallParams) {
  if (isDevelopment && sharedRequestQueue) {
    // rpcNodeUrl is empty by default - this conditional is separate to prevent automatically moving to the else block for the live env fetch calls
    if (rpcNodeURL) {
      return new Promise((resolve, reject) => {
        sharedRequestQueue.add(async () => {
          try {
            const response = await fetch(rpcNodeURL, {
              body: JSON.stringify({
                jsonrpc: '2.0',
                id: getNextRequestId().toString(),
                method,
                params,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
              method: 'POST',
              signal: abortSignal,
            });
            const result = await response.json();
            resolve(result);
          } catch (e) {
            console.log('Error fetching RPC (possible CORS issue):', e);
            reject(e);
          }
        });
      });
    }
  } else {
    // Normal execution without rate limiting
    try {
      const response = await fetch(rpcNodeURL, {
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: getNextRequestId().toString(),
          method,
          params,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        signal: abortSignal,
      });
      return await response.json();
    } catch (e) {
      console.log('Error fetching RPC (possible CORS issue):', e);
    }
  }
}
