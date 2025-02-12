import {
  getRecentPerformanceSamples,
  getVoteAccounts,
  getTransactionCount,
} from "../../../hooks/useTransactionStats";

// Define an enum for the API calls
export const ApiCallEnum = {
  PerformanceSamples: "PerformanceSamples",
  VoteAccounts: "VoteAccounts",
  TransactionCount: "TransactionCount",
};

// Map the enum values to the corresponding API call functions
const apiFunctionMapping = {
  [ApiCallEnum.PerformanceSamples]: getRecentPerformanceSamples,
  [ApiCallEnum.VoteAccounts]: getVoteAccounts,
  [ApiCallEnum.TransactionCount]: getTransactionCount,
};

// Export the mapping
export default apiFunctionMapping;
