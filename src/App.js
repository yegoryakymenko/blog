import React, { Component } from "react";
import PostsList from "./components/PostsList";
import uuid from "uuid";
import "./assets/style/app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      isLoaded: false,
      count: 0, // номер страницы
      jsxCode: ""
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(result => result.json())
      .then(users => {
        this.setState({ users: users, isLoaded: true });
        console.log("Users is loaded" + " ", users.length);
        users.length ? this.getPosts() : this.getUsers();
      })
      .then();
  }
  getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(result => result.json())
      .then(posts => {
        this.setState({ posts: posts, isLoaded: true });
        console.log("posts is loaded");
        this.renderPost();
      });
  }
  renderPost() {
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
    return this.setState({ jsxCode: postId });
  }

  render() {
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

// нужно вывести 10 первых постов от каждого юзера
// изнчально я получаю айди юзера от 1 до 10
// я могу умножать данное айди на 10 но нужно будет добавлять единицу с каждой итерацией, чтобы я мог попадать на правильного юзера
