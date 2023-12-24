// Import the necessary modules
const express = require('express');
const weaviateClient = require('./weaviate-config.js');
const firstBatchClient = require('./firstbatch-config.js');
const generateUserEmbeddings = require('./user-embeddings.js');

// Create an Express application
const app = express();

// Set the port for the application
const port = process.env.PORT || 3000;

// Define a route to generate user embeddings
app.get('/generate-user-embeddings', async (req, res) => {
  try {
    await generateUserEmbeddings();
    res.status(200).send('User embeddings generated successfully.');
  } catch (error) {
    res.status(500).send('An error occurred while generating user embeddings: ' + error.message);
  }
});

// Define a route to get personalized feeds for a user
app.get('/personalized-feed/:userId', async (req, res) => {
  try {
    // Get the user ID from the request parameters
    const userId = req.params.userId;

    // Get the user from Weaviate
    const user = await weaviateClient.data().withClassName('User').withId(userId).do();

    // Get personalized feeds for the user using FirstBatch SDK
    const personalizedFeed = await firstBatchClient.getPersonalizedFeed(user);

    // Send the personalized feed as the response
    res.status(200).json(personalizedFeed);
  } catch (error) {
    res.status(500).send('An error occurred while getting personalized feed: ' + error.message);
  }
});

// Start the application
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

// Export the app for testing
module.exports = app;
