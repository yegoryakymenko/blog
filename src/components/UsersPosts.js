import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import PostsStore from "../store/PostsStore";
import "../assets/style/app.css";
import uuid from "uuid";

@inject("PostsStore")
@observer
class UsersPosts extends Component {
  render() {
    console.log(this.props.match.params.id);
    const { users, posts, userId, setUserId } = this.props.PostsStore;

    console.log(users, posts, userId, "df");

    if (!users || !posts) return <h1>No users or posts</h1>;
    console.log("userid : ", this.userId);
    let userName = users.map(user => {
      if(this.props.match.params.id == user.id) {
        return user.name;
      }
    });
    let userPosts = posts.map(item => {
      return (
        <li key={uuid.v4()}>
          <h2>{userName}</h2>
          <h3 className="blogBlock-title">{item.title}</h3>
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
