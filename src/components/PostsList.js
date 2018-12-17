import React, { Component } from "react";
import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { getUsers } from "../provider/Action";
import PostsStore from "../store/PostsStore";
import uuid from "uuid";

@inject("PostsStore")
@observer
class PostsList extends Component {
  state = {
    page: 0
  };
  componentDidMount() {
    const p = getUsers.call(this);
    console.log(p, "d");
  }

  // handleUserId = e => {
  //   console.log(id, "e");

  //   PostsStore.setUserId(id);
  // };

  render() {
    const { users, posts, count } = this.props.PostsStore;
    if (!users || !posts) return <h1>No users or posts</h1>;

    let postId = users.map((item, i) => {
      let id = i * 10 + count;
      return (
        <li key={uuid.v4()}>
          <Link to={"/user/" + item.id}>
            <h2 className="blogBlock-userName">{item.name}</h2>
          </Link>
          <h3 className="blogBlock-title">{posts[id].title}</h3>
          <p>{posts[id].body}</p>
        </li>
      );
    });

    return (
      <div className="App">
        <ul className="blogBlock">{postId}</ul>
      </div>
    );
  }
}

export default PostsList;
