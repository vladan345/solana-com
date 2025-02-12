let nextRequestId: bigint = 0n;

export default function getNextRequestId(): bigint {
  return ++nextRequestId;
}
