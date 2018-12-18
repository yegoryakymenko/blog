import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
//import PostsStore from "../store/PostsStore";
import "../assets/style/app.css";
import uuid from "uuid";

@inject("PostsStore")
@observer
class UsersPosts extends Component {
  render() {
    const { users, posts, userId, comments } = this.props.PostsStore;

    if (!users || !posts) return <h1>No users or posts</h1>;
    let userName = users.map(user => {
      if (this.props.match.params.id == user.id) {
        return user.name;
      }
    });
    let userPosts = posts.map(item => {
      if (this.props.match.params.id == item.userId)
        return (
          <li key={uuid.v4()} className="blogBlock-li">
            <h2>{userName}</h2>
            <Link to={"/post/" + item.id}>
              <h3 className="blogBlock-title">{item.title}</h3>
            </Link>
            <h3 className="blogBlock-userName">{item.body}</h3>
            <h4>{item.comments}</h4>
          </li>
        );
    });

    return (
      <React.Fragment>
        <ul className="blogBlock">{userPosts}</ul>
      </React.Fragment>
    );
  }
}

export default UsersPosts;
