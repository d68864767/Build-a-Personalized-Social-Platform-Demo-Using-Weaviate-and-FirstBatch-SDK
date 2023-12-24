// Import the Weaviate client
const Weaviate = require('weaviate-client');

// Configure the Weaviate client
const weaviateClient = new Weaviate({
  scheme: 'https', // or 'http'
  host: 'your-weaviate-instance.com', // replace with your Weaviate instance host
  port: 443, // replace with your Weaviate instance port
});

// Export the configured Weaviate client
module.exports = weaviateClient;
