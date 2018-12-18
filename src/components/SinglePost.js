import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import PostsStore from "../store/PostsStore";
import "../assets/style/app.css";
import uuid from "uuid";
import _ from "lodash";

@inject("PostsStore")
@observer
class SinglePost extends Component {
  render() {
    const { users, posts, userId, comments } = this.props.PostsStore;
    console.log(this.props.match.params.id); // id моего поста
    let postComments = _.map(comments, comment => {
      if (this.props.match.params.id == comment.postId) {
        return (
          <li key={uuid.v4()} className="blogBlock-li">
            <h3 className="blogBlock-userName">{comment.name}</h3>
            <h3 className="blogBlock-email">{comment.email}</h3>
            <h3 className="blogBlock-body">{comment.body}</h3>
          </li>
        );
      }
    });
    let postBlock = _.map(posts, post => {
      if (this.props.match.params.id == post.id) {
        return (
          <li key={uuid.v4()} className="blogBlock-li">
            <h3 className="blogBlock-title">{post.title}</h3>
            <h3 className="blogBlock-body">{post.body}</h3>
          </li>
        );
      }
    });
    return (
      <React.Fragment>
        <ul className="blogBlock">{postBlock}</ul>
        <ul className="blogBlock commentsBlock">{postComments}</ul>
      </React.Fragment>
    );
  }
}

export default SinglePost;
