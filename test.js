// Import the necessary modules
const request = require('supertest');
const app = require('./app.js');

// Test the route for generating user embeddings
describe('GET /generate-user-embeddings', () => {
  it('should generate user embeddings successfully', async () => {
    const res = await request(app)
      .get('/generate-user-embeddings')
      .expect(200);
    expect(res.text).toEqual('User embeddings generated successfully.');
  });

  it('should handle errors properly', async () => {
    const res = await request(app)
      .get('/generate-user-embeddings')
      .expect(500);
    expect(res.text).toContain('An error occurred while generating user embeddings:');
  });
});

// Test the route for getting personalized feeds for a user
describe('GET /personalized-feed/:userId', () => {
  it('should get personalized feed successfully', async () => {
    const userId = 'test-user-id'; // replace with a valid user ID
    const res = await request(app)
      .get(`/personalized-feed/${userId}`)
      .expect(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should handle errors properly', async () => {
    const userId = 'invalid-user-id'; // replace with an invalid user ID
    const res = await request(app)
      .get(`/personalized-feed/${userId}`)
      .expect(500);
    expect(res.text).toContain('An error occurred while getting personalized feed:');
  });
});
