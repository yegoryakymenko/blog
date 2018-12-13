import React, { Component } from "react";
import uuid from "uuid";

class PostsList extends Component {
  render() {
    const { users, isLoaded, count, posts } = this.props;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {users.map(user => (
              <li key={uuid.v4()}>
                <p>{user.name}</p>
                {posts.map(post => (
                  <ul>
                    <li key={uuid.v4()}>
                      {post.userId === user.id ? post.title : ""}
                    </li>
                  </ul>
                ))}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default PostsList;
