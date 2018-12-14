import React, { Component } from "react";
import uuid from "uuid";

class PostsList extends Component {
  render() {
    const { users, isLoaded, count, posts, jsxCode } = this.props;
    return (
      <div className="App">
        <ul className="blogBlock">{this.props.jsxCode}</ul>
      </div>
    );
  }
}

export default PostsList;
