import React, { Component } from "react";
import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import { getUsers } from "../provider/Action";
import uuid from "uuid";

//@inject("PostsStore")
@observer
class PostsList extends Component {
  @observable state;
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      isLoaded: false,
      count: 0, // номер страницы
      jsxCode: "" // контент полученый с fetch который будет рендериться
    };
  }

  componentDidMount() {
    const posts = getUsers();
    console.log(posts, "d");
  }

  render() {
    const { jsxCode } = this.state;
    const renderPost = () => {
      const { users, posts, isLoaded, count } = this.state;
      let postId = users.map((item, i) => {
        let id = i * 10 + count;
        return (
          <li key={uuid.v4()}>
            <h2 className="blogBlock-userName">{item.name}</h2>
            <h3 className="blogBlock-title">{posts[id].title}</h3>
            <p>{posts[id].body}</p>
          </li>
        );
      });

      this.setState({ jsxCode: postId });
    };

    return (
      <div className="App">
        <ul className="blogBlock">{jsxCode}</ul>
      </div>
    );
  }
}

export default PostsList;
