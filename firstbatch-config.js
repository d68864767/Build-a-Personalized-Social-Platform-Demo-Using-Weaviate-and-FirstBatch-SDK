// Import the FirstBatch SDK
const FirstBatch = require('firstbatch-sdk');

// Configure the FirstBatch SDK
const firstBatchConfig = {
  apiKey: 'YOUR_FIRSTBATCH_API_KEY', // replace with your actual API key
  apiSecret: 'YOUR_FIRSTBATCH_API_SECRET', // replace with your actual API secret
  environment: 'production', // or 'sandbox' for testing
};

// Initialize the FirstBatch SDK
const firstBatchClient = new FirstBatch(firstBatchConfig);

// Export the FirstBatch client for use in other files
module.exports = firstBatchClient;
