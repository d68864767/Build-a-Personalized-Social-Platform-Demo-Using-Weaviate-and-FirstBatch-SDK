# Personalized Social Platform Demo

This project is a demo of a personalized social platform showcasing real-time personalization using Weaviate for vector storage and FirstBatch for personalized feeds. The application provides a simple social media UI with functionalities like browsing feeds, liking, and sharing.

## Features

- Real-time personalization of feeds
- Integration with Weaviate for vector storage
- Integration with FirstBatch for personalized feeds
- Simple social media UI for browsing feeds, liking, and sharing

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/personalized-social-platform-demo.git
```

Navigate to the project directory:

```bash
cd personalized-social-platform-demo
```

Install the dependencies:

```bash
npm install
```

## Configuration

You need to configure Weaviate and FirstBatch SDKs. 

For Weaviate, update the `weaviate-config.js` file with your Weaviate instance details:

```javascript
const Weaviate = require('weaviate-client');

const weaviateClient = new Weaviate({
  scheme: 'https', // or 'http'
  host: 'your-weaviate-instance.com', // replace with your Weaviate instance host
  port: 443, // replace with your Weaviate instance port
});

module.exports = weaviateClient;
```

For FirstBatch, update the `firstbatch-config.js` file with your FirstBatch API key and secret:

```javascript
const FirstBatch = require('firstbatch-sdk');

const firstBatchConfig = {
  apiKey: 'YOUR_FIRSTBATCH_API_KEY', // replace with your actual API key
  apiSecret: 'YOUR_FIRSTBATCH_API_SECRET', // replace with your actual API secret
  environment: 'production', // or 'sandbox' for testing
};

const firstBatchClient = new FirstBatch(firstBatchConfig);

module.exports = firstBatchClient;
```

## Usage

To start the application, run:

```bash
npm start
```

To run the tests, use:

```bash
npm test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
