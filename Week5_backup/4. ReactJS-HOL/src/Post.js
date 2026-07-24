// src/Post.js
import React, { Component } from 'react';

class Post extends Component {
  render() {
    const { title, body } = this.props;
    return (
      <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    );
  }
}

export default Post;