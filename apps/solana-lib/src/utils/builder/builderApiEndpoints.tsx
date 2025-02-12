// Objects for each API with their endpoints
export const ExplorerAPIEndpoints = {
  TransactionsPerSecond: "Transactions per second",
  TotalTransactions: "Total Transactions",
  ValidatorNodes: "Validator Nodes",
  // Add more endpoints as needed
};

// More API Objects can be added here
// const AnotherAPIEndpoints = {
//   Endpoint1: "Endpoint1",
//   Endpoint2: "Endpoint2",
//   // Add more endpoints as needed
// };

// Main API Object
export const BuilderAPIs = {
  ExplorerAPI: "Explorer API",
  // AnotherAPI: "Another API",
  // Add more APIs as needed
};

// Mapping of APIs to their respective endpoints
export const BuilderAPIMapping = {
  [BuilderAPIs.ExplorerAPI]: ExplorerAPIEndpoints,
  // [APIs.AnotherAPI]: AnotherAPIEndpoints,
  // Add more mappings as needed
};

// Function to get endpoints for a specific API
export function getEndpointsForBuilderAPI(api: any) {
  return Object.values(BuilderAPIMapping[api]);
}
