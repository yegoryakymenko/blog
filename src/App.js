import React, { Component } from "react";
import PostsList from "./components/PostsList";
import uuid from "uuid";
import "./assets/style/app.css";
import { totalmem } from "os";

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
        // console.log(this.state.items[0].name);
      })
      .then(this.getPosts());
  }
  getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(result => result.json())
      .then(posts => {
        this.setState({ posts: posts, isLoaded: true });
        console.log(this.state.posts);
        this.renderPost();
      });
  }
  renderPost() {
    const { users, posts, isLoaded, count } = this.state;
    let postId = users.map((item, i) => {
      let id = i * 10 + count;
      return (
        <li key={uuid.v4()}>
          <p>{item.name}</p>
          <li key={uuid.v4()}>{posts[id]["title"]}</li>
        </li>
      );
      console.log(id);
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
