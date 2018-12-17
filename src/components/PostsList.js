import React, { Component } from "react";
import uuid from "uuid";

class PostsList extends Component {
  render() {
    const { jsxCode } = this.props;
    return (
      <div className="App">
        <ul>{jsxCode}</ul>
      </div>
    );
  }
}

export default PostsList;
