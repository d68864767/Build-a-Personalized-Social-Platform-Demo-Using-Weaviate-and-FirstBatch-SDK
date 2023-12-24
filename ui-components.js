```jsx
import React from 'react';
import axios from 'axios';

// Component for displaying a single post
const Post = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
    <button>Like</button>
    <button>Share</button>
  </div>
);

// Component for displaying the feed of posts
class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null,
    };
  }

  async componentDidMount() {
    try {
      // Replace with your actual server API
      const response = await axios.get('/personalized-feed/:userId');
      this.setState({ posts: response.data });
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

// Main App component
const App = () => (
  <div>
    <h1>Personalized Social Platform</h1>
    <Feed />
  </div>
);

export default App;
```

