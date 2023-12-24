// Import the Weaviate client from the weaviate-config.js file
const weaviateClient = require('./weaviate-config.js');

// Import the FirstBatch client from the firstbatch-config.js file
const firstBatchClient = require('./firstbatch-config.js');

// Define a function to generate user embeddings
async function generateUserEmbeddings() {
  // Get all users from Weaviate
  const users = await weaviateClient.data().withClassName('User').withLimit(10000).do();

  // Iterate over each user
  for (let user of users.data.items) {
    // Generate a user embedding using FirstBatch SDK
    const userEmbedding = await firstBatchClient.generateEmbedding(user);

    // Update the user in Weaviate with the new embedding
    await weaviateClient.data().withClassName('User').withId(user.id).withFields(['embedding']).withBody({embedding: userEmbedding}).do();
  }
}

// Call the function to generate user embeddings
generateUserEmbeddings().catch(console.error);

// Export the function for use in other files
module.exports = generateUserEmbeddings;
