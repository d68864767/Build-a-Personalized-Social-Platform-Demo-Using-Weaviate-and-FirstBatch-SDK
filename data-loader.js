// Import the Weaviate client from the configuration file
const weaviateClient = require('./weaviate-config.js');

// Import the fs module for reading data files
const fs = require('fs');

// Define the path to your data file
const dataFilePath = './data/posts.json'; // replace with your actual data file path

// Function to load data into Weaviate
async function loadData() {
  try {
    // Read the data file
    const data = fs.readFileSync(dataFilePath, 'utf8');

    // Parse the JSON data
    const posts = JSON.parse(data);

    // Iterate over each post
    for (let post of posts) {
      // Create a Weaviate object from the post data
      const weaviateObject = {
        class: 'Post',
        schema: {
          title: post.title,
          content: post.content,
          author: post.author,
          timestamp: post.timestamp,
        },
      };

      // Add the object to Weaviate
      await weaviateClient.dataObjectCreator.create(weaviateObject);
    }

    console.log('Data loaded successfully');
  } catch (error) {
    console.error('Failed to load data:', error);
  }
}

// Call the function to load data
loadData();
