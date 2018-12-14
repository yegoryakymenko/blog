import React, { Component } from "react";
import PostsList from "./components/PostsList";
import uuid from "uuid";
import { observable } from "mobx";
import { inject, observer } from "mobx-react";
import "./assets/style/app.css";
import { getUsers } from "./provider/Action";

@inject("PostsStore")
@observer
class App extends Component {
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
      <PostsList
        users={this.state.users}
        posts={this.state.posts}
        isLoaded={this.state.isLoaded}
        count={this.state.count}
        renderPost={this.renderPost}
        jsxCode={this.state.jsxCode}
      />
    );
  }
}

export default App;
